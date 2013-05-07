(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.Channel = factory());
        });
    } else {
        // Browser globals
        root.Channel = factory();
    }
} (this, function () {
    /**
     * An abstract parent for a two-way communication channel. You may send
     * messages to this channel, and another party may register listeners who
     * can register to receive message callbacks.
     * @constructor
     */
    Channel = function () {};

    /**
     * Registers a function to be called when a message is sent.
     * @param {function(Channel, (string|Object))} listener  A callback func
     */
    Channel.prototype.registerListener = function (listener) {
        if (!listener.call) {
            if (network_debug) console.log("Listener call type is "+typeof(listener));
            if (network_debug) console.log("Listener constructor type is "+listener.constructor);
            throw "Error in registerListener: not a function";
        }
        if (!this.mListener) {
            this.mListener = listener;
        } else if (this.mListener instanceof Array) {
            this.mListener.push(listener);
        } else {
            this.mListener = [this.mListener, listener];
        }
    };


    /**
     * Registers a function to be called when a message is sent.
     * @param {function(Channel, (string|Object))} listener  A callback func
     */
    Channel.prototype.unregisterListener = function (listener) {
        if (listener==this.mListener) {
            delete this.mListener;
            return true;
        }
        if (this.mListener instanceof Array) {
            for (var i=0;i<this.mListener.length;++i) {
                if (this.mListener[i]==listener) {
                    for (var j=i;j+1<this.mListener.length;++j) {
                        this.mListener[j]=this.mListener[j+1];
                    }
                    this.mListener.pop();
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Protected function to be called by subclasses when a message has been
     * received and is to be delivered to listeners.
     * @param {string|Object} data  Serializable data to pass to the listeners.
     * @protected
     */
    Channel.prototype.callListeners = function (data) {
        if (!this.mListener) {
            error("Channel mListener not set");
            return;
        }
        if (this.mListener.call) {
            this.mListener(this, data);
        } else {
            for (var i = 0; i < this.mListener.length; i++) {
                this.mListener[i](this, data);
            }
        }
    };
    /**
     * Abstract function to be called by subclasses when a message has been
     * received and is to be delivered to listeners.
     */
    Channel.prototype.sendMessage = null;

    return Channel;
}));