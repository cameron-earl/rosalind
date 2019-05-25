"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var splc_1 = __importDefault(require("./splc"));
var sampleInput = ">Rosalind_10\nATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG\n>Rosalind_12\nATCGGTCGAA\n>Rosalind_15\nATCGGTCGAGCGTGT";
describe('splc', function () {
    it('should pass sample test', function () {
        var sampleOutput = 'MVYIADKQHVASREAYGHMFKVCA';
        expect(splc_1.default(sampleInput)).toEqual(sampleOutput);
    });
});
