"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
exports.default = (function (data) {
    var _a = helpers_1.fastaToArray(data), dna = _a[0], subSeq = _a[1];
    var locations = [];
    for (var _i = 0, subSeq_1 = subSeq; _i < subSeq_1.length; _i++) {
        var c = subSeq_1[_i];
        var lastIdx = locations.length ? locations[locations.length - 1] : -1;
        var i = dna.indexOf(c, lastIdx + 1);
        if (i < 0)
            return '';
        locations.push(i);
    }
    return locations.map(function (n) { return n + 1; }).join(' ');
});
