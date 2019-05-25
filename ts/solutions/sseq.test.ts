import sseq from './sseq';

const sampleInput = `>Rosalind_14
ACGCACGTGACG
>Rosalind_18
GTA`;

describe('sseq', () => {
	it('should pass sample test', () => {
		const expected = '3 8 10';
		expect(sseq(sampleInput)).toEqual(expected);
	});

	it('should handle consecutive duplicate letters', () => {
		const input = `Rosalind_14\nGATTAGA\n>Rosalind_15\nGGA`;
		const expected = '1 6 7';
		expect(sseq(input)).toEqual(expected);
	});
});
