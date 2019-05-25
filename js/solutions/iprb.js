"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    var _a = data.split(' ').map(Number), AANum = _a[0], AaNum = _a[1], aaNum = _a[2];
    var totalPop = AANum + AaNum + aaNum;
    var popCounts = {
        AA: AANum,
        Aa: AaNum,
        aa: aaNum,
    };
    var chanceRecessive = { AA: 0, Aa: 0.5, aa: 1 };
    var percentages = [];
    for (var first in popCounts) {
        var firstProb = popCounts[first] / totalPop;
        for (var second in popCounts) {
            var thisCount = popCounts[second];
            if (first === second)
                thisCount--;
            var secondProb = firstProb * (thisCount / (totalPop - 1));
            var recessiveChance = chanceRecessive[first] * chanceRecessive[second];
            var dominantChance = 1 - recessiveChance;
            percentages.push(secondProb * dominantChance);
        }
    }
    return percentages.reduce(function (a, b) { return a + b; }).toFixed(5);
});
