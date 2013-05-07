(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('sirikata/protobuf'), require('sirikata/pbj'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['sirikata/protobuf', 'sirikata/pbj'], function (PROTO, PBJ) {
            return (root.Sirikata = factory(PROTO, PBJ));
        });
    } else {
        // Browser globals
        root.Sirikata = factory(root.PROTO, root.PBJ);
    }
} (this, function (PROTO, PBJ) {
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.AggregateBoundingInfo = PROTO.Message("Sirikata.Protocol.AggregateBoundingInfo",{
        center_offset: {
            options: {packed:true},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.vector3f;},
            id: 1
        },
        center_bounds_radius: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.Float;},
            id: 2
        },
        max_object_size: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.Float;},
            id: 3
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.Empty = PROTO.Message("Sirikata.Protocol.Empty",{
    });
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.Frame = PROTO.Message("Sirikata.Protocol.Frame",{
        payload: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.bytes;},
            id: 1
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    if (typeof(Sirikata.Protocol.Loc)=="undefined") {Sirikata.Protocol.Loc = {};}
    Sirikata.Protocol.Loc._PBJ_Internal="pbj-0.0.3";
//import "TimedMotionVector.pbj";
//import "TimedMotionQuaternion.pbj";
//import "AggregateBoundingInfo.pbj";

    Sirikata.Protocol.Loc.LocationUpdate = PROTO.Message("Sirikata.Protocol.Loc.LocationUpdate",{
        object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 1
        },
        seqno: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 6
        },
        epoch: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 8
        },
        location: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionVector;},
            id: 2
        },
        orientation: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionQuaternion;},
            id: 3
        },
        aggregate_bounds: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.AggregateBoundingInfo;},
            id: 10
        },
        mesh: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 5
        },
        physics: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 7
        },
        parent: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.uuid;},
            id: 9
        },
        index_id: {
            options: {packed:true},
            multiplicity: PROTO.repeated,
            type: function(){return PROTO.uint32;},
            id: 11
        }});
    Sirikata.Protocol.Loc.BulkLocationUpdate = PROTO.Message("Sirikata.Protocol.Loc.BulkLocationUpdate",{
        update: {
            options: {},
            multiplicity: PROTO.repeated,
            type: function(){return Sirikata.Protocol.Loc.LocationUpdate;},
            id: 1
        }});
    Sirikata.Protocol.Loc.LocationUpdateRequest = PROTO.Message("Sirikata.Protocol.Loc.LocationUpdateRequest",{
        location: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionVector;},
            id: 1
        },
        orientation: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionQuaternion;},
            id: 2
        },
        bounds: {
            options: {packed:true},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.boundingsphere3f;},
            id: 3
        },
        mesh: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 4
        },
        physics: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 5
        },
        epoch: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 6
        }});
    Sirikata.Protocol.Loc.Container = PROTO.Message("Sirikata.Protocol.Loc.Container",{
        update_request: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Loc.LocationUpdateRequest;},
            id: 1
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    if (typeof(Sirikata.Protocol.Object)=="undefined") {Sirikata.Protocol.Object = {};}
    Sirikata.Protocol.Object._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.Object.ObjectMessage = PROTO.Message("Sirikata.Protocol.Object.ObjectMessage",{
        source_object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 1
        },
        source_port: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint32;},
            id: 2
        },
        dest_object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 3
        },
        dest_port: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint32;},
            id: 4
        },
        unique: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 5
        },
        payload: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 6
        }});
    Sirikata.Protocol.Object.Noise = PROTO.Message("Sirikata.Protocol.Object.Noise",{
        payload: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.bytes;},
            id: 1
        }});
    Sirikata.Protocol.Object.Ping = PROTO.Message("Sirikata.Protocol.Object.Ping",{
        ping: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.time;},
            id: 7
        },
        distance: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.Double;},
            id: 8
        },
        id: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 9
        },
        payload: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 10
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    if (typeof(Sirikata.Protocol.Prox)=="undefined") {Sirikata.Protocol.Prox = {};}
    Sirikata.Protocol.Prox._PBJ_Internal="pbj-0.0.3";
//import "TimedMotionVector.pbj";
//import "TimedMotionQuaternion.pbj";
//import "AggregateBoundingInfo.pbj";

    Sirikata.Protocol.Prox.QueryRequest = PROTO.Message("Sirikata.Protocol.Prox.QueryRequest",{
        query_angle: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.Float;},
            id: 1
        },
        query_max_count: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 2
        },
        query_parameters: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 3
        }});
    Sirikata.Protocol.Prox.IndexProperties = PROTO.Message("Sirikata.Protocol.Prox.IndexProperties",{
        id: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint32;},
            id: 1
        },
        index_id: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 2
        },
        DynamicClassification: PROTO.Enum("Sirikata.Protocol.Prox.IndexProperties.DynamicClassification",{
            Static :1,
            Dynamic :2	}),
        dynamic_classification: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Prox.IndexProperties.DynamicClassification;},
            id: 3
        }});
    Sirikata.Protocol.Prox.ObjectAddition = PROTO.Message("Sirikata.Protocol.Prox.ObjectAddition",{
        object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 1
        },
        location: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.TimedMotionVector;},
            id: 2
        },
        orientation: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.TimedMotionQuaternion;},
            id: 3
        },
        aggregate_bounds: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.AggregateBoundingInfo;},
            id: 10
        },
        seqno: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 5
        },
        mesh: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 6
        },
        physics: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 7
        },
        parent: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.uuid;},
            id: 8
        },
        ObjectType: PROTO.Enum("Sirikata.Protocol.Prox.ObjectAddition.ObjectType",{
            Object :1,
            Aggregate :2	}),
        type: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Prox.ObjectAddition.ObjectType;},
            id: 9
        }});
    Sirikata.Protocol.Prox.ObjectRemoval = PROTO.Message("Sirikata.Protocol.Prox.ObjectRemoval",{
        RemovalType: PROTO.Enum("Sirikata.Protocol.Prox.ObjectRemoval.RemovalType",{
            Transient :1,
            Permanent :2	}),
        object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 1
        },
        seqno: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 2
        },
        type: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Prox.ObjectRemoval.RemovalType;},
            id: 3
        }});
    Sirikata.Protocol.Prox.ProximityUpdate = PROTO.Message("Sirikata.Protocol.Prox.ProximityUpdate",{
        addition: {
            options: {},
            multiplicity: PROTO.repeated,
            type: function(){return Sirikata.Protocol.Prox.ObjectAddition;},
            id: 1
        },
        removal: {
            options: {},
            multiplicity: PROTO.repeated,
            type: function(){return Sirikata.Protocol.Prox.ObjectRemoval;},
            id: 2
        },
        index_properties: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Prox.IndexProperties;},
            id: 3
        }});
    Sirikata.Protocol.Prox.ProximityResults = PROTO.Message("Sirikata.Protocol.Prox.ProximityResults",{
        t: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.time;},
            id: 1
        },
        update: {
            options: {},
            multiplicity: PROTO.repeated,
            type: function(){return Sirikata.Protocol.Prox.ProximityUpdate;},
            id: 2
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    if (typeof(Sirikata.Protocol.Session)=="undefined") {Sirikata.Protocol.Session = {};}
    Sirikata.Protocol.Session._PBJ_Internal="pbj-0.0.3";
//import "TimedMotionVector.pbj";
//import "TimedMotionQuaternion.pbj";

    Sirikata.Protocol.Session.VersionInfo = PROTO.Message("Sirikata.Protocol.Session.VersionInfo",{
        name: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 1
        },
        version: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 2
        },
        major: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 3
        },
        minor: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 4
        },
        revision: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 5
        },
        vcs_version: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 6
        }});
    Sirikata.Protocol.Session.Connect = PROTO.Message("Sirikata.Protocol.Session.Connect",{
        ConnectionType: PROTO.Enum("Sirikata.Protocol.Session.Connect.ConnectionType",{
            Fresh :1,
            Migration :2	}),
        version: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.VersionInfo;},
            id: 11
        },
        type: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.Session.Connect.ConnectionType;},
            id: 1
        },
        object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 2
        },
        auth: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 8
        },
        loc: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionVector;},
            id: 3
        },
        orientation: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionQuaternion;},
            id: 4
        },
        bounds: {
            options: {packed:true},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.boundingsphere3f;},
            id: 5
        },
        query_angle: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.Float;},
            id: 6
        },
        query_max_count: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 10
        },
        query_parameters: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 12
        },
        mesh: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 7
        },
        physics: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 9
        },
        oh_name: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 13
        },
        zernike: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 14
        }});
    Sirikata.Protocol.Session.ConnectResponse = PROTO.Message("Sirikata.Protocol.Session.ConnectResponse",{
        Response: PROTO.Enum("Sirikata.Protocol.Session.ConnectResponse.Response",{
            Success :1,
            Redirect :2,
            Error :3	}),
        version: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.VersionInfo;},
            id: 8
        },
        response: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.Session.ConnectResponse.Response;},
            id: 1
        },
        redirect: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 2
        },
        loc: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionVector;},
            id: 3
        },
        orientation: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.TimedMotionQuaternion;},
            id: 4
        },
        bounds: {
            options: {packed:true},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.boundingsphere3f;},
            id: 5
        },
        mesh: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 6
        },
        physics: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 7
        }});
    Sirikata.Protocol.Session.ConnectAck = PROTO.Message("Sirikata.Protocol.Session.ConnectAck",{
    });
    Sirikata.Protocol.Session.InitiateMigration = PROTO.Message("Sirikata.Protocol.Session.InitiateMigration",{
        new_server: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 1
        }});
    Sirikata.Protocol.Session.Disconnect = PROTO.Message("Sirikata.Protocol.Session.Disconnect",{
        object: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 1
        },
        reason: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 2
        }});
    Sirikata.Protocol.Session.Coordinate = PROTO.Message("Sirikata.Protocol.Session.Coordinate",{
        CoordinationType: PROTO.Enum("Sirikata.Protocol.Session.Coordinate.CoordinationType",{
            Add :1,
            Remove :2,
            MigrateTo :3,
            MigrateFrom :4,
            MigrateReq :5,
            Ready :6,
            Ack :7	}),
        type: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.Session.Coordinate.CoordinationType;},
            id: 1
        },
        object: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.uuid;},
            id: 2
        },
        entity: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.uuid;},
            id: 3
        },
        oh_name: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 4
        },
        migrate_capacity: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 5
        },
        migrate_threshold: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.int32;},
            id: 6
        }});
    Sirikata.Protocol.Session.OHMigration = PROTO.Message("Sirikata.Protocol.Session.OHMigration",{
        MigrationType: PROTO.Enum("Sirikata.Protocol.Session.OHMigration.MigrationType",{
            Object :1,
            Entity :2,
            Ack :3	}),
        type: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.Session.OHMigration.MigrationType;},
            id: 1
        },
        id: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uuid;},
            id: 2
        },
        oh_name: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 3
        },
        password: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 4
        },
        reason: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.string;},
            id: 5
        },
        objects: {
            options: {},
            multiplicity: PROTO.repeated,
            type: function(){return PBJ.uuid;},
            id: 6
        }});
    Sirikata.Protocol.Session.Container = PROTO.Message("Sirikata.Protocol.Session.Container",{
        seqno: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 8
        },
        connect: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.Connect;},
            id: 1
        },
        connect_response: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.ConnectResponse;},
            id: 2
        },
        connect_ack: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.ConnectAck;},
            id: 3
        },
        init_migration: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.InitiateMigration;},
            id: 4
        },
        disconnect: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.Disconnect;},
            id: 5
        },
        coordinate: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.Coordinate;},
            id: 6
        },
        oh_migration: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return Sirikata.Protocol.Session.OHMigration;},
            id: 7
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    if (typeof(Sirikata.Protocol.SST)=="undefined") {Sirikata.Protocol.SST = {};}
    Sirikata.Protocol.SST._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.SST.SSTChannelHeader = PROTO.Message("Sirikata.Protocol.SST.SSTChannelHeader",{
        channel_id: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uint8;},
            id: 1
        },
        transmit_sequence_number: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 2
        },
        ack_count: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uint8;},
            id: 3
        },
        ack_sequence_number: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint64;},
            id: 4
        },
        payload: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 5
        }});
    Sirikata.Protocol.SST.SSTStreamHeader = PROTO.Message("Sirikata.Protocol.SST.SSTStreamHeader",{
        StreamPacketType: PROTO.Enum("Sirikata.Protocol.SST.SSTStreamHeader.StreamPacketType",{
            INIT :1,
            REPLY :2,
            DATA :3,
            ACK :4,
            DATAGRAM :5	}),
        Flags: PROTO.Flags(123456,"Sirikata.Protocol.SST.SSTStreamHeader.Flags",{
            CONTINUES : 1}),
        lsid: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint32;},
            id: 1
        },
        type: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uint8;},
            id: 2
        },
        flags: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return Sirikata.Protocol.SST.SSTStreamHeader.Flags;},
            id: 3
        },
        window: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.uint8;},
            id: 4
        },
        src_port: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint32;},
            id: 5
        },
        dest_port: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PROTO.uint32;},
            id: 6
        },
        psid: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint32;},
            id: 7
        },
        rsid: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint32;},
            id: 8
        },
        bsn: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.uint64;},
            id: 9
        },
        payload: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PROTO.bytes;},
            id: 10
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.TimedMotionQuaternion = PROTO.Message("Sirikata.Protocol.TimedMotionQuaternion",{
        t: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.time;},
            id: 1
        },
        position: {
            options: {packed:true},
            multiplicity: PROTO.required,
            type: function(){return PBJ.quaternion;},
            id: 2
        },
        velocity: {
            options: {packed:true},
            multiplicity: PROTO.required,
            type: function(){return PBJ.quaternion;},
            id: 3
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.TimedMotionVector = PROTO.Message("Sirikata.Protocol.TimedMotionVector",{
        t: {
            options: {},
            multiplicity: PROTO.required,
            type: function(){return PBJ.time;},
            id: 1
        },
        position: {
            options: {packed:true},
            multiplicity: PROTO.required,
            type: function(){return PBJ.vector3f;},
            id: 2
        },
        velocity: {
            options: {packed:true},
            multiplicity: PROTO.required,
            type: function(){return PBJ.vector3f;},
            id: 3
        }});
    "use strict";
    /** @suppress {duplicate}*/var Sirikata;
    if (typeof(Sirikata)=="undefined") {Sirikata = {};}
    if (typeof(Sirikata.Protocol)=="undefined") {Sirikata.Protocol = {};}
    Sirikata.Protocol._PBJ_Internal="pbj-0.0.3";

    Sirikata.Protocol.TimeSync = PROTO.Message("Sirikata.Protocol.TimeSync",{
        seqno: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.uint8;},
            id: 1
        },
        t: {
            options: {},
            multiplicity: PROTO.optional,
            type: function(){return PBJ.time;},
            id: 2
        }});

    return Sirikata;
}));