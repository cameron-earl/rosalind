import perm, { arrayMinusIdx } from './perm';

const sampleOutput = `6
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1`;

describe('perm', () => {
	it('should pass sample test', () => {
		const input = '3';
		expect(perm(input)).toEqual(sampleOutput);
	});
});

describe('arrayMinusIdx', () => {
	it('should return [1, 3, 4] given [1, 2, 3, 4] and 1', () => {
		expect(arrayMinusIdx([1, 2, 3, 4], 1)).toEqual([1, 3, 4]);
	});

	it('should return [] given [1] and 0', () => {
		expect(arrayMinusIdx([1], 0)).toEqual([]);
	});

	it('should return [] given [] and 0', () => {
		expect(arrayMinusIdx([], 0)).toEqual([]);
	});
});
