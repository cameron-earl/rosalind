"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    var counts = {
        A: 0,
        C: 0,
        G: 0,
        T: 0,
    };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var c = data_1[_i];
        counts[c] += 1;
    }
    return counts.A + " " + counts.C + " " + counts.G + " " + counts.T;
});
