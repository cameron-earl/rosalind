"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dna_1 = __importDefault(require("./dna"));
describe('dna', function () {
    it('should return 1 0 0 0 given "A"', function () {
        expect(dna_1.default('A')).toEqual('1 0 0 0');
    });
    it('should return 2 1 3 0 given "AGCGAG"', function () {
        expect(dna_1.default('AGCGAG')).toEqual('2 1 3 0');
    });
});
