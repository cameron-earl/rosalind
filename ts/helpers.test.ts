import {
	dnaToProtein,
	dnaToRna,
	motifLocations,
	reverseComplement,
	rnaToDna,
	rnaToProtein,
} from './helpers';

describe('dnaToRna', () => {
	it('should return "ACGU" given "ACGT"', () => {
		expect(dnaToRna('ACGT')).toEqual('ACGU');
	});
});
describe('rnaToDna', () => {
	it('should return "ACGT" given "ACGU"', () => {
		expect(rnaToDna('ACGU')).toEqual('ACGT');
	});
});

describe('reverseComplement', () => {
	it('should return "ACCGGGTTTT" given "AAAACCCGGT"', () => {
		expect(reverseComplement('AAAACCCGGT')).toEqual('ACCGGGTTTT');
	});
});

describe('dnaToProtein', () => {
	it('should return "MISCHIEF" given matching dna', () => {
		const input = 'ATGATTTCTTGCCATATTGAATTC';
		const expected = 'MISCHIEF';
		expect(dnaToProtein(input)).toEqual(expected);
	});
});

describe('rnaToProtein', () => {
	it('should return protein string correctly', () => {
		const input = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA';
		expect(rnaToProtein(input)).toEqual('MAMAPRTEINSTRING');
	});
});

describe('motifLocations', () => {
	it('should return [2, 4, 10] given subs sample data', () => {
		const na = 'GATATATGCATATACTT';
		const motif = 'ATAT';
		const expected = [2, 4, 10];
		const actual = motifLocations(na, motif);

		expect(actual).toEqual(expected);
	});

	it('should find motif at end of nucleic acid', () => {
		const na = 'GATTACATAT';
		const motif = 'ATAT';
		const expected = [7];
		const actual = motifLocations(na, motif);

		expect(actual).toEqual(expected);
	});
});
