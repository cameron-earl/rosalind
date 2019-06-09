import {
	AminoAcid,
	codonsForAminoAcid,
	dnaToProtein,
	dnaToRna,
	editDistance,
	findSplitSubseq,
	hammingDistance,
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

describe('codonsForAminoAcid', () => {
	it('should return stop codons', () => {
		const { Stop } = AminoAcid;
		const stopCodons: string[] = ['UAA', 'UAG', 'UGA'];
		expect(codonsForAminoAcid(Stop)).toEqual(stopCodons);
	});
});

describe('findSplitSubseq', () => {
	it('should return address of simple subsequence', () => {
		const na = 'AGCTCAGT';
		const subseq = 'ATAT';

		expect(findSplitSubseq(na, subseq)).toEqual([0, 3, 5, 7]);
	});

	it('should return empty array when subsequence not found', () => {
		const na = 'TTGGGGGG';
		const subseq = 'TTT';

		expect(findSplitSubseq(na, subseq)).toEqual([]);
	});
});

describe('hammingDistance', () => {
	it('should return -1 given strings with different lengths', () => {
		expect(hammingDistance('GATTACA', 'CAT')).toEqual(-1);
	});

	it('should return 0 given empty strings', () => {
		expect(hammingDistance('', '')).toEqual(0);
	});

	it('should return 0 given identical strings', () => {
		expect(hammingDistance('CAT', 'CAT')).toEqual(0);
	});

	it('should return 1 given nearly identical strings', () => {
		expect(hammingDistance('CAT', 'GAT')).toEqual(1);
	});

	it('should return 2 given strings with hamming distance 2', () => {
		expect(hammingDistance('CAT', 'GAC')).toEqual(2);
	});
});

describe('editDistance', () => {
	it('should return 0 given two empty strings', () => {
		expect(editDistance('', '')).toEqual(0);
	});

	it('should return the length of the string if the other is empty', () => {
		expect(editDistance('cat', '')).toEqual(3);
	});

	it('should return the length of the string if the first is empty', () => {
		expect(editDistance('', 'cat')).toEqual(3);
	});

	it('should pass return 3 given kitten and sitting', () => {
		expect(editDistance('kitten', 'sitting')).toEqual(3);
	});

	it('should pass return 4 given Sunday and Saturdays', () => {
		expect(editDistance('Sunday', 'Saturdays')).toEqual(4);
	});
});
