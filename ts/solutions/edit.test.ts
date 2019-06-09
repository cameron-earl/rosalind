import edit from './edit';

const sampleInput = `>Rosalind_39
PLEASANTLY
>Rosalind_11
MEANLY`;

describe('edit', () => {
	it('should pass the sample test', () => {
		expect(edit(sampleInput)).toEqual('5');
	});
});
