import lcsq, { optimalLCS } from './lcsq';

const sampleInput = `>Rosalind_23
AACCTTGG
>Rosalind_64
ACACTGTGA`;

describe('lcsq', () => {
	it('should pass sample test', () => {
		const outputs = ['AACTGG', 'AACTTG', 'ACCTGG', 'ACCTTG'];
		const actual = lcsq(sampleInput);
		expect(actual.length).toEqual(6);
		expect(outputs).toContain(actual);
	});
});

describe('optimalLCS', () => {
	it('should return an empty string given two empty strings', () => {
		expect(optimalLCS('', '')).toEqual('');
	});

	it('should return an empty string given one empty string', () => {
		expect(optimalLCS('ACGT', '')).toEqual('');
	});

	it('should return CA given CAG and CAT', () => {
		expect(optimalLCS('CAG', 'CAT')).toEqual('CA');
	});

	it('should return AG given CAG and TAG', () => {
		expect(optimalLCS('CAG', 'TAG')).toEqual('AG');
	});

	it('should return CAAG given CACAG and CATAG', () => {
		expect(optimalLCS('CATAG', 'CACAG')).toEqual('CAAG');
	});

	it('should return "CAGGC" given "CAGAGAC" and "CAGTGTC"', () => {
		expect(optimalLCS('CAGAGAC', 'CAGTGTC')).toEqual('CAGGC');
	});

	it('should return "ACA" given "GAGGACA" and "TACCAT"', () => {
		expect(optimalLCS('GAGGACA', 'TACCAT')).toEqual('ACA');
	});
});
/*
describe('longestSplitSubseq', () => {
	it('should return an empty string given two empty strings', () => {
		expect(longestSplitSubseq('', '')).toEqual('');
	});

	it('should return an empty string given one empty string', () => {
		expect(longestSplitSubseq('ACGT', '')).toEqual('');
	});

	it('should return ca given cat and cam', () => {
		expect(longestSplitSubseq('CAG', 'CAT')).toEqual('CA');
	});

	it('should return og given dog and cog', () => {
		expect(longestSplitSubseq('CAG', 'TAG')).toEqual('AG');
	});

	it('should return caog given catdog and cahog', () => {
		expect(longestSplitSubseq('CATAG', 'CACAG')).toEqual('CAAG');
	});

	it('should return "camrn" given "cameron" and "catamaran"', () => {
		expect(longestSplitSubseq('CAGAGAC', 'CAGTGTC')).toEqual('CAGGC');
	});

	it('should return "ACA" given "GAGGACA" and "TACCAT"', () => {
		expect(longestSplitSubseq('GAGGACA', 'TACCAT')).toEqual('ACA');
	});
});

describe('trimCommonStringStartEnd', () => {
	it('should return appropriate object for empty strings', () => {
		expect(trimCommonStringStartEnd('', '')).toEqual({
			commonStart: '',
			commonEnd: '',
			mid1: '',
			mid2: '',
		} as IStringStartEnd);
	});

	it('should return appropriate object given one empty string', () => {
		expect(trimCommonStringStartEnd('CAT', '')).toEqual({
			commonStart: '',
			commonEnd: '',
			mid1: 'CAT',
			mid2: '',
		} as IStringStartEnd);
	});

	it('should return appropriate object given two different strings', () => {
		expect(trimCommonStringStartEnd('CAT', 'GGG')).toEqual({
			commonStart: '',
			commonEnd: '',
			mid1: 'CAT',
			mid2: 'GGG',
		} as IStringStartEnd);
	});

	it('should return appropriate object given strings with same start', () => {
		expect(trimCommonStringStartEnd('CAT', 'CGG')).toEqual({
			commonStart: 'C',
			commonEnd: '',
			mid1: 'AT',
			mid2: 'GG',
		} as IStringStartEnd);
	});
});

describe('trimUniqueCharacters', () => {
	it('should return empty strings given empty strings', () => {
		expect(trimUniqueCharacters('', '')).toEqual({ str1: '', str2: '' });
	});

	it('should return empty strings given one empty string', () => {
		expect(trimUniqueCharacters('CAT', '')).toEqual({ str1: '', str2: '' });
	});

	it('should return empty strings given entirely different strings', () => {
		expect(trimUniqueCharacters('CAT', 'GGG')).toEqual({ str1: '', str2: '' });
	});

	it('should return common characters given different strings', () => {
		expect(trimUniqueCharacters('CCATAT', 'GTTGTA')).toEqual({
			str1: 'ATAT',
			str2: 'TTTA',
		});
	});

	it('should not overwrite original strings', () => {
		const str1 = 'TAT';
		const str2 = 'GCGG';
		trimUniqueCharacters(str1, str2);
		expect(str1).toEqual('TAT');
		expect(str2).toEqual('GCGG');
	});
});

describe('trimOffStringStartEnd', () => {
	it('should trim properly when given zeroes', () => {
		expect(trimOffStringStartEnd('CAT', 0, 0)).toEqual('CAT');
	});

	it('should trim properly when given ones', () => {
		expect(trimOffStringStartEnd('CAT', 1, 1)).toEqual('A');
	});
});

describe('commonStringStart', () => {
	it('should return an empty string if both strings are empty', () => {
		expect(commonStringStart('', '')).toEqual('');
	});

	it('should return empty string when one is empty', () => {
		expect(commonStringStart('CAT', '')).toEqual('');
	});

	it('should return empty string when strings begin with different letters', () => {
		expect(commonStringStart('CAT', 'GGG')).toEqual('');
	});

	it('should return "c" when both start with c', () => {
		expect(commonStringStart('CAT', 'CGGGGG')).toEqual('C');
	});

	it('should return "ca" when both start with ca', () => {
		expect(commonStringStart('CAT', 'CAGCCG')).toEqual('CA');
	});

	it('should return "car" when both start with car', () => {
		expect(commonStringStart('CATTTTT', 'CATGGGGGG')).toEqual('CAT');
	});

	it('should return "carbon" when both start with carbon', () => {
		expect(commonStringStart('CATCATCCCC', 'CATCATGGGGG')).toEqual('CATCAT');
	});
});

describe('commonStringEnd', () => {
	it('should return empty string when both strings are empty', () => {
		expect(commonStringEnd('', '')).toEqual('');
	});

	it('should return empty string when either string is empty', () => {
		expect(commonStringEnd('', 'CAT')).toEqual('');
	});

	it('should return empty string when ends are different', () => {
		expect(commonStringEnd('GCC', 'CAT')).toEqual('');
	});

	it('should return "g" when ends are different', () => {
		expect(commonStringEnd('GAG', 'TCG')).toEqual('G');
	});

	it('should return "og" when ends are different', () => {
		expect(commonStringEnd('GAG', 'TCTAG')).toEqual('AG');
	});
});

describe('containsSubseq', () => {
	it('should return false if both strings are empty', () => {
		expect(containsSubseq('', '')).toEqual(false);
	});

	it('should return false if subseq is empty', () => {
		expect(containsSubseq('cat', '')).toEqual(false);
	});

	it('should return false if subseq is longer than na', () => {
		expect(containsSubseq('AAA', 'AAAA')).toEqual(false);
	});

	it('should return true if subseq is continuous in na', () => {
		expect(containsSubseq('AAAA', 'AAA')).toEqual(true);
	});

	it('should return false if subseq of same characters in na but mixed', () => {
		expect(containsSubseq('ACGT', 'TGCA')).toEqual(false);
	});

	it('should return false given apparently failing test', () => {
		expect(containsSubseq('CACTGTGA', 'ACCTTGG')).toEqual(false);
	});
});
*/
