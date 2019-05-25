"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
exports.default = (function (data) {
    var _a = data.split(/\s/g), na = _a[0], motif = _a[1];
    return helpers_1.motifLocations(na, motif).join(' ');
});
