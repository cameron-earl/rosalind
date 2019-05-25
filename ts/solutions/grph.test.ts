import grph from './grph';

const sampleInput = `>Rosalind_0498
AAATAAA
>Rosalind_2391
AAATTTT
>Rosalind_2323
TTTTCCC
>Rosalind_0442
AAATCCC
>Rosalind_5013
GGGTGGG`;

describe('grph', () => {
	it('should pass sample test', () => {
		const expectedArr = [
			'Rosalind_0498 Rosalind_2391',
			'Rosalind_0498 Rosalind_0442',
			'Rosalind_2391 Rosalind_2323',
		];
		const actual = grph(sampleInput);
		expect(actual.split('\n').length).toEqual(expectedArr.length);
		expect(actual).toContain(expectedArr[0]);
		expect(actual).toContain(expectedArr[1]);
		expect(actual).toContain(expectedArr[2]);
	});
});
