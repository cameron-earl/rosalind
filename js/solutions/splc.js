"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
exports.default = (function (data) {
    var _a = helpers_1.fastaToArray(data), dna = _a[0], introns = _a.slice(1);
    for (var _i = 0, introns_1 = introns; _i < introns_1.length; _i++) {
        var intron = introns_1[_i];
        var regexp = new RegExp(intron, 'g');
        dna = dna.replace(regexp, '');
    }
    return helpers_1.dnaToProtein(dna);
});
