"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var cons_1 = __importDefault(require("./cons"));
var dna_1 = __importDefault(require("./dna"));
var fib_1 = __importDefault(require("./fib"));
var gc_1 = __importDefault(require("./gc"));
var hamm_1 = __importDefault(require("./hamm"));
var iprb_1 = __importDefault(require("./iprb"));
var perm_1 = __importDefault(require("./perm"));
var splc_1 = __importDefault(require("./splc"));
var sseq_1 = __importDefault(require("./sseq"));
var subs_1 = __importDefault(require("./subs"));
var utilities_1 = require("../utilities");
var main = function (fnName) {
    var fnNames = Object.keys(exports.solutions);
    // if a valid function name is provided in cli command arg, run it
    // otherwise, run the last function listed
    var fnToRun = exports.solutions[fnName] ? fnName : fnNames[fnNames.length - 1];
    utilities_1.log.info('Running %s:', fnToRun);
    utilities_1.runFn(fnToRun);
};
exports.solutions = {
    dna: dna_1.default,
    rna: helpers_1.dnaToRna,
    revc: helpers_1.reverseComplement,
    iprb: iprb_1.default,
    fib: fib_1.default,
    gc: gc_1.default,
    prot: helpers_1.rnaToProtein,
    subs: subs_1.default,
    hamm: hamm_1.default,
    // iev,
    // fibd,
    // mrna,
    // lia,
    // prtm,
    // grph,
    // mprt,
    cons: cons_1.default,
    // orf,
    splc: splc_1.default,
    // lcsm,
    perm: perm_1.default,
    // revp
    sseq: sseq_1.default,
};
exports.default = main;
