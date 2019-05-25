import fibd, { allButFirst, allButLast, sumBigIntArr } from './fibd';

describe('fibd', () => {
	it('should pass sample test', () => {
		const sampleInput = '6 3';
		const expected = '4';
		expect(fibd(sampleInput)).toEqual(expected);
	});

	it('should handle big integers', () => {
		const sampleInput = '100 16';
		const expected = '348102173637223073109';
		expect(fibd(sampleInput)).toEqual(expected);
	});
});

describe('sumBigIntArr', () => {
	it('should return 10n given [1n, 2n, 3n, 4n]', () => {
		expect(sumBigIntArr([1n, 2n, 3n, 4n])).toEqual(10n);
	});

	it('should return 46n given [12n,  34n]', () => {
		expect(sumBigIntArr([12n, 34n])).toEqual(46n);
	});
});

describe('allButFirst', () => {
	it('should return [2, 3, 4] given [1, 2, 3, 4]', () => {
		expect(allButFirst([1, 2, 3, 4])).toEqual([2, 3, 4]);
	});
});

describe('allButLast', () => {
	it('should return [1, 2, 3] given [1, 2, 3, 4]', () => {
		expect(allButLast([1, 2, 3, 4])).toEqual([1, 2, 3]);
	});
});
