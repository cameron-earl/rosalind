"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sseq_1 = __importDefault(require("./sseq"));
var sampleInput = ">Rosalind_14\nACGCACGTGACG\n>Rosalind_18\nGTA";
describe('sseq', function () {
    it('should pass sample test', function () {
        var expected = '3 8 10';
        expect(sseq_1.default(sampleInput)).toEqual(expected);
    });
    it('should handle consecutive duplicate letters', function () {
        var input = "Rosalind_14\nGATTAGA\n>Rosalind_15\nGGA";
        var expected = '1 6 7';
        expect(sseq_1.default(input)).toEqual(expected);
    });
});
