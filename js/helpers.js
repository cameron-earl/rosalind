"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var DnaBase;
(function (DnaBase) {
    DnaBase["A"] = "A";
    DnaBase["C"] = "C";
    DnaBase["G"] = "G";
    DnaBase["T"] = "T";
})(DnaBase = exports.DnaBase || (exports.DnaBase = {}));
exports.d = DnaBase;
var RnaBase;
(function (RnaBase) {
    RnaBase["A"] = "A";
    RnaBase["C"] = "C";
    RnaBase["G"] = "G";
    RnaBase["U"] = "U";
})(RnaBase = exports.RnaBase || (exports.RnaBase = {}));
exports.r = RnaBase;
var AminoAcid;
(function (AminoAcid) {
    AminoAcid["Stop"] = "";
    AminoAcid["A"] = "A";
    AminoAcid["C"] = "C";
    AminoAcid["D"] = "D";
    AminoAcid["E"] = "E";
    AminoAcid["F"] = "F";
    AminoAcid["G"] = "G";
    AminoAcid["H"] = "H";
    AminoAcid["I"] = "I";
    AminoAcid["K"] = "K";
    AminoAcid["L"] = "L";
    AminoAcid["M"] = "M";
    AminoAcid["N"] = "N";
    AminoAcid["P"] = "P";
    AminoAcid["Q"] = "Q";
    AminoAcid["R"] = "R";
    AminoAcid["S"] = "S";
    AminoAcid["T"] = "T";
    AminoAcid["V"] = "V";
    AminoAcid["W"] = "W";
    AminoAcid["Y"] = "Y";
})(AminoAcid = exports.AminoAcid || (exports.AminoAcid = {}));
exports.aa = AminoAcid;
exports.reverseComplements = (_a = {},
    _a[exports.d.A] = exports.d.T,
    _a[exports.d.C] = exports.d.G,
    _a[exports.d.G] = exports.d.C,
    _a[exports.d.T] = exports.d.A,
    _a);
exports.dnaToRna = function (dna) { return dna.replace(/T/g, 'U'); };
exports.rnaToDna = function (rna) { return rna.replace(/U/g, 'T'); };
exports.reverseComplement = function (dna) {
    return dna
        .split('')
        .map(function (base) { return exports.reverseComplements[base]; })
        .reverse()
        .join('');
};
exports.fastaToObj = function (data) {
    var keyVals = data
        .trim()
        .slice(1)
        .split('>');
    var obj = {};
    for (var _i = 0, keyVals_1 = keyVals; _i < keyVals_1.length; _i++) {
        var keyVal = keyVals_1[_i];
        var _a = keyVal.split('\n'), key = _a[0], data_1 = _a.slice(1);
        obj[key] = data_1.join('');
    }
    return obj;
};
exports.fastaToArray = function (data) {
    return Object.values(exports.fastaToObj(data));
};
exports.rnaCodonProteinMap = {
    AAA: exports.aa.K,
    AAC: exports.aa.N,
    AAG: exports.aa.K,
    AAU: exports.aa.N,
    ACA: exports.aa.T,
    ACC: exports.aa.T,
    ACG: exports.aa.T,
    ACU: exports.aa.T,
    AGA: exports.aa.R,
    AGC: exports.aa.S,
    AGG: exports.aa.R,
    AGU: exports.aa.S,
    AUA: exports.aa.I,
    AUC: exports.aa.I,
    AUG: exports.aa.M,
    AUU: exports.aa.I,
    CAA: exports.aa.Q,
    CAC: exports.aa.H,
    CAG: exports.aa.Q,
    CAU: exports.aa.H,
    CCA: exports.aa.P,
    CCC: exports.aa.P,
    CCG: exports.aa.P,
    CCU: exports.aa.P,
    CGA: exports.aa.R,
    CGC: exports.aa.R,
    CGG: exports.aa.R,
    CGU: exports.aa.R,
    CUA: exports.aa.L,
    CUC: exports.aa.L,
    CUG: exports.aa.L,
    CUU: exports.aa.L,
    GUU: exports.aa.V,
    GUC: exports.aa.V,
    GUA: exports.aa.V,
    GUG: exports.aa.V,
    GCU: exports.aa.A,
    GCC: exports.aa.A,
    GCA: exports.aa.A,
    GCG: exports.aa.A,
    GAU: exports.aa.D,
    GAC: exports.aa.D,
    GAA: exports.aa.E,
    GAG: exports.aa.E,
    GGA: exports.aa.G,
    GGC: exports.aa.G,
    GGG: exports.aa.G,
    GGU: exports.aa.G,
    UAA: exports.aa.Stop,
    UAC: exports.aa.Y,
    UCA: exports.aa.S,
    UAU: exports.aa.Y,
    UCU: exports.aa.S,
    UAG: exports.aa.Stop,
    UCC: exports.aa.S,
    UCG: exports.aa.S,
    UGA: exports.aa.Stop,
    UGC: exports.aa.C,
    UGG: exports.aa.W,
    UGU: exports.aa.C,
    UUA: exports.aa.L,
    UUC: exports.aa.F,
    UUG: exports.aa.L,
    UUU: exports.aa.F,
};
exports.rnaToProtein = function (rna) {
    return (rna.match(/[\s\S]{1,3}/g) || [])
        .map(function (codon) { return exports.rnaCodonProteinMap[codon]; })
        .join('');
};
exports.dnaToProtein = function (dna) {
    return exports.rnaToProtein(exports.dnaToRna(dna));
};
exports.motifLocations = function (na, motif) {
    var oneBasedIndices = [];
    for (var i = 0; i < na.length - motif.length + 1; i++) {
        var substr = na.slice(i, i + motif.length);
        if (substr === motif) {
            oneBasedIndices.push(i + 1);
        }
    }
    return oneBasedIndices;
};
