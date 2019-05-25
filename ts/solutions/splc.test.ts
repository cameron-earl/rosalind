import splc from './splc';

const sampleInput = `>Rosalind_10
ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG
>Rosalind_12
ATCGGTCGAA
>Rosalind_15
ATCGGTCGAGCGTGT`;

describe('splc', () => {
	it('should pass sample test', () => {
		const sampleOutput = 'MVYIADKQHVASREAYGHMFKVCA';

		expect(splc(sampleInput)).toEqual(sampleOutput);
	});
});
