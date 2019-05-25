"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var A = helpers_1.DnaBase.A, C = helpers_1.DnaBase.C, G = helpers_1.DnaBase.G, T = helpers_1.DnaBase.T;
exports.default = (function (data) {
    var _a, _b;
    var dnaArr = helpers_1.fastaToArray(data);
    var consensusStr = '';
    var freqCounts = (_a = {},
        _a[A] = [],
        _a[C] = [],
        _a[G] = [],
        _a[T] = [],
        _a);
    for (var i = 0; i < dnaArr[0].length; i++) {
        var baseCounts = (_b = {},
            _b[A] = 0,
            _b[C] = 0,
            _b[G] = 0,
            _b[T] = 0,
            _b);
        for (var _i = 0, dnaArr_1 = dnaArr; _i < dnaArr_1.length; _i++) {
            var dna = dnaArr_1[_i];
            baseCounts[dna[i]]++;
        }
        var maxCount = 0;
        var mostCommonBase = A;
        for (var base in baseCounts) {
            var b = base;
            freqCounts[b].push(baseCounts[b]);
            if (maxCount < baseCounts[b]) {
                maxCount = baseCounts[b];
                mostCommonBase = b;
            }
        }
        consensusStr += helpers_1.DnaBase[mostCommonBase];
    }
    var freqTable = Object.entries(freqCounts)
        .map(function (entry) { return entry[0] + ": " + entry[1].join(' '); })
        .join('\n');
    return consensusStr + "\n" + freqTable;
});
