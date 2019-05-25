import dna from './dna';

describe('dna', () => {
	it('should return 1 0 0 0 given "A"', () => {
		expect(dna('A')).toEqual('1 0 0 0');
	});

	it('should return 2 1 3 0 given "AGCGAG"', () => {
		expect(dna('AGCGAG')).toEqual('2 1 3 0');
	});
});
