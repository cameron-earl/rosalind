"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
describe('fastaToObj', function () {
    it('should correctly parse simple input', function () {
        var input = ">Rosalind_6404\nCCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC\nTCCCACTAATAATTCTGAGG\n>Rosalind_5959\nCCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT\nATATCCATTTGTCAGCAGACACGC\n>Rosalind_0808\nCCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC\nTGGGAACCTGCGGGCAGTAGGTGGAAT";
        var actual = helpers_1.fastaToObj(input);
        var keyValArr = Object.entries(actual);
        expect(keyValArr.length).toEqual(3);
        expect(actual['Rosalind_5959']).toEqual('CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC');
    });
});
describe('rnaToProtein', function () {
    it('should return protein string correctly', function () {
        var input = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA';
        expect(helpers_1.rnaToProtein(input)).toEqual('MAMAPRTEINSTRING');
    });
});
describe('motifLocations', function () {
    it('should return [2, 4, 10] given subs sample data', function () {
        var na = 'GATATATGCATATACTT';
        var motif = 'ATAT';
        var expected = [2, 4, 10];
        var actual = helpers_1.motifLocations(na, motif);
        expect(actual).toEqual(expected);
    });
    it('should find motif at end of nucleic acid', function () {
        var na = 'GATTACATAT';
        var motif = 'ATAT';
        var expected = [7];
        var actual = helpers_1.motifLocations(na, motif);
        expect(actual).toEqual(expected);
    });
});
