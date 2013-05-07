(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('sirikata/channel'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['sirikata/channel'], function (Channel) {
            return (root.TCPSST = factory(Channel));
        });
    } else {
        // Browser globals
        root.TCPSST = factory(root.Channel);
    }
} (this, function (Channel) {
    function extend(childcons, parent) {
        'use strict';
        /* Doesn't allow instanceof to work. If we want this, we would make
         use "new parent.constructor" as our object. */
        for (var prop in parent) {
            childcons.prototype[prop] = parent[prop];
        }
        childcons.prototype.constructor = childcons;
        childcons.prototype.SUPER = parent;
    };

    function getMessageCallback(thus, which) {
        return function(ev) {
            thus._onMessage(which, ev.data);
        };
    }

    function getOpenCallback(thus, which) {
        return function(ev) {
            thus._onOpen(which);
        };
    }

    function getCloseCallback(thus, which) {
        return function(ev) {
            thus._onClose(which);
        };
    }

    function getErrorCallback(thus, which) {
        return function(ev) {
            thus._onError(which);
        };
    }

    function serializeVarInt(val, uint8array, offset) {
        var tmp;
        var first = 0;
        var len = 0;
        do {
            tmp = val & 0x7f;
            val >>>= 7;
            if (val != 0) {
                tmp += 128;
            }
            uint8array[len++] = tmp;
        } while (val != 0);
        return len;
    }

    function parseVarInt(uint8array, offset, len) {
        var i = 0;
        var val = 0;
        var tmp;
        for (var i = 0; i < len; i++) {
            tmp = uint8array[i];
            val |= ((tmp & 127) << (7 * i));
            if (!(tmp & 128)) {
                return [i + 1, val];
            }
        }
    }

    /**
     * TCPSST is a protocol which has several substreams over a single
     *     TCP (WebSocket) connection.
     * @constructor
     * @param {string} host  The hostname to connect to.
     * @param {string} port  The port number to connect to.
     * @param {number=} numStreams  Number of connections to make (def. 1)
     */
    TCPSST = function (uri, numStreams) {
        if (!numStreams) {
            numStreams = 1;
        }
        this.mURI = uri;
        this.mSockets = new Array(numStreams);
        this.mConnected = new Array;
        this.mMessageQueue = new Array;
        for (var i = 0; i < numStreams; i++) {
            this._connectSocket(i);
        }
        this.mNextSubstream = 1; //16777217; // 1
        this.mSubstreams = new Object;
    };

    /**
     * Start connecting a new WebSocket. Also sets callbacks.
     * @param {number} which  Which socket is starting to connect.
     * @private
     */
    TCPSST.prototype._connectSocket = function (which) {
        if (this.mSockets[which] && this.mSockets[which].readyState == WebSocket.CONNECTED) {
            this.mConnected--;
        }
        var sock = new WebSocket(this.mURI);
        sock.binaryType = "arraybuffer";
        sock.onopen = getOpenCallback(this, which);
        sock.onclose = getCloseCallback(this, which);
        sock.onmessage = getMessageCallback(this, which);
        sock.onerror = getErrorCallback(this, which);
        sock._timeout = setTimeout(this._onError.bind(this, which), 10000);
        this.mSockets[which] = sock;
    };
    /**
     * A remote connection ended for some reason.
     * @param {number} which  Which socket disconnected.
     * @private
     */
    TCPSST.prototype._onClose = function (which) {
        //if (network_debug) console.log("Closed socket "+which);
        var index = this.mConnected.indexOf(which);
        if (index != -1) {
            this.mConnected.splice(index,1);
        }
        // FIXME: Shouldn't there be some transparent reconnect?
        // What do we do if only one of the streams closes (network error?)
        for (var i in this.mSubstreams) {
            this.mSubstreams[i].callListeners(null);
        }
    };
    /**
     * A remote connection was established. Sends all messages in the
     * queue on this single socket, since other sockets have not yet been
     * established. This might not always be ideal, so maybe timeouts would
     * work better.
     * @param {number} which  Which socket finished connecting.
     * @private
     */
    TCPSST.prototype._onOpen = function (which) {
        //if (network_debug) console.log("Opened socket "+which);

        clearTimeout(this.mSockets[which]._timeout);
        delete this.mSockets[which]._timeout;

        this.mConnected.push(which);
        for (var i = 0; i < this.mMessageQueue.length; i++) {
            this.mSockets[which].send(this.mMessageQueue[i]);
        }
        this.mMessageQueue = new Array;
        // Set this.mConnected = true; send anything waiting in queue.
    };

    TCPSST.prototype._onError = function (which) {
        delete this.mSockets[which];

        for (var i in this.mSubstreams) {
            this.mSubstreams[i].callListeners(null);
        }
    };

    /**
     * Received data on one of our sokets.
     * @param {number} which  Which socket got some data.
     * @param {string} b64data  Received some ASCII data (usually base64).
     * @private
     */
    TCPSST.prototype._onMessage = function (which, buffer) {
        var u8arr = new Uint8Array(buffer, 0, (buffer.length < 5 ? buffer.length : 5));
        var parsed = parseVarInt(u8arr, 0, u8arr.length);
        if (!parsed) {
            console.log("Error: Failed to parse stream ID!");
            return;
        }
        var offset = parsed[0];
        var streamnumber = parsed[1];

        if (!this.mSubstreams[streamnumber]) {
            var substream = new TCPSST.Substream(this, streamnumber);
            this.mSubstreams[streamnumber] = substream;
        }
        this.mSubstreams[streamnumber].callListeners(new Uint8Array(buffer, offset));
    };

    var sidArray = new Uint8Array(5);

    /**
     * Sends a message over the WebSocket connection
     * @param streamid  Which stream number (allocated by Substream)
     * @param base64data  Any ASCII data (binary data not yet supported).
     */
    TCPSST.prototype.send = function (streamid, array) {
        //console.log("Send to socket stream "+streamid+":",base64data);

        var sidLen = serializeVarInt(streamid, sidArray, 0);

        var arrayBuf = new ArrayBuffer(sidLen + array.length);
        var u8arrayBuf = new Uint8Array(arrayBuf);
        for (var i = 0; i < sidLen; i++) {
            u8arrayBuf[i] = sidArray[i];
        }
        u8arrayBuf.set(array, sidLen);

        if (this.mConnected.length == 0) {
            this.mMessageQueue.push(arrayBuf);
            return;
        }
        var randsock = this.mSockets[this.mConnected[Math.floor(
            Math.random()*this.mConnected.length)]];
        randsock.send(arrayBuf);
    };
    /**
     * Picks a new substream ID. Does not yet clean up old substreams.
     * Doing this is tricky because you need to receive acknowledgement
     * from all open connections before it can be reused.
     * @return {number} A new substream ID.
     * @private
     */
    TCPSST.prototype._getNewSubstreamID = function () {
        var ret = this.mNextSubstream;
        this.mNextSubstream += 2;
        return ret;
    };
    /**
     * Allocates a new Substream using the next available substream ID.
     * @return {TCPSST.Substream} A new Channel that can send/receive.
     */
    TCPSST.prototype.clone = function () {
        var id = this._getNewSubstreamID();
        var substr = new TCPSST.Substream(this, id);
        this.mSubstreams[id] = substr;
        return substr;
    };

    /**
     * closes down the entire stream and all substreams it contains
     * Does not, at the moment, send callbacks since this is likely in app cleanup code
     *
     */
    TCPSST.prototype.close = function () {
        var len = this.mSockets.length;
        for (var i=0;i<len;++i) {
            this.mSockets[i].close();
        }
    };

    /**
     * A single substream which is able to send/receive messages.
     * @constructor
     * @param {TCPSST} tcpsst  The top-level stream.
     * @param {number} which  This stream id (for sending messages).
     */
    TCPSST.Substream = function (tcpsst, which) {
        this.mOwner = tcpsst;
        this.mWhich = which;
        Channel.call(this);
    };
    extend(TCPSST.Substream, Channel.prototype);

    /**
     * Send ASCII (usually base64 encoded) data over this substream
     */
    TCPSST.Substream.prototype.sendMessage = function (data) {
        this.mOwner.send(this.mWhich, data);
    };
    /**
     * @return {TCPSST}  The owning top-level stream.
     */
    TCPSST.Substream.prototype.getTopLevelStream = function () {
        return this.mOwner;
    };
    /**
     * Close and clean-up this substream. Not yet implemented!!!
     * Send a packet on stream 0 with the contents equal to this stream id?
     */
    TCPSST.Substream.prototype.close = function () {
        // FIXME: How do we send a "close" message?
    };

    return TCPSST;
}));
