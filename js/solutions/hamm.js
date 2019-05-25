"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    var dnaArr = data.split('\n');
    var distance = 0;
    for (var i = 0; i < dnaArr[0].length; i++) {
        if (dnaArr[0][i] !== dnaArr[1][i])
            distance++;
    }
    return distance.toString();
});
