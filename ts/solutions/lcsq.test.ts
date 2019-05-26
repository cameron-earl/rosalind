import lcsq from './lcsq';

const sampleInput = `>Rosalind_23
AACCTTGG
>Rosalind_64
ACACTGTGA`;

describe('lcsq', () => {
	it('should pass sample test', () => {
		expect(lcsq(sampleInput)).toEqual('AACTGG');
	});
});
