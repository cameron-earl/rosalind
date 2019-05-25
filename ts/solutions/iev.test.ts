import iev from './iev';

describe('iev', () => {
	it('should pass sample test', () => {
		const sampleInput = '1 0 0 1 0 1';
		const expected = '3.5';
		expect(iev(sampleInput)).toEqual(expected);
	});
});
