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
