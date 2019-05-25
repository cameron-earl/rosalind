"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
exports.default = (function (data) {
    var dataObj = helpers_1.fastaToObj(data);
    var percentObj = {};
    var maxKey = '';
    var maxPercent = 0;
    for (var key in dataObj) {
        var dna = dataObj[key];
        var gcCount = dna
            .split('')
            .reduce(function (sum, c) { return sum + +(c === 'G' || c === 'C'); }, 0);
        var percent = gcCount / dna.length;
        if (maxPercent < percent) {
            maxKey = key;
            maxPercent = percent;
        }
        var percentToPlace = (percent * 100).toFixed(6);
        percentObj[key] = percentToPlace;
    }
    return maxKey + " " + percentObj[maxKey] + "%";
});
