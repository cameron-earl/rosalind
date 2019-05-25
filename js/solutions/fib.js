"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    var _a = data.split(' ').map(Number), n = _a[0], k = _a[1];
    var seq = [1, 1];
    for (var i = 0; i < n - 2; i++) {
        seq.push(seq[i] * k + seq[i + 1]);
    }
    return seq[n - 1].toString();
});
