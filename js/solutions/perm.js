"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data) {
    var n = +data;
    var arr = new Array(n).fill(0).map(function (e, i) { return i + 1; });
    var permutations = exports.getAllPermutations(arr);
    return permutations.length + "\n" + permutations
        .map(function (a) { return a.join(' '); })
        .join('\n');
});
exports.getAllPermutations = function (arr) {
    if (arr.length <= 1)
        return [arr];
    var permutations = [];
    var _loop_1 = function (i) {
        var startEl = arr[i];
        var truncated = exports.arrayMinusIdx(arr, i);
        var perms = exports.getAllPermutations(truncated).map(function (permArr) { return [
            startEl
        ].concat(permArr); });
        permutations = permutations.concat(perms);
    };
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
    return permutations;
};
exports.arrayMinusIdx = function (arr, i) {
    return arr.slice(0, i).concat(arr.slice(i + 1));
};
