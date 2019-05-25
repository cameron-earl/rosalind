import { fastaToArray, fastaToObj, parseNumberArray } from './parsing';

describe('parseNumberArray', () => {
	it('should correctly parse simple input', () => {
		const input = '1 2 3';
		const expected = [1, 2, 3];
		expect(parseNumberArray(input)).toEqual(expected);
	});
});

describe('fasta functions', () => {
	const fastaObj = {
		Rosalind_0808:
			'CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCTGCGGGCAGTAGGTGGAAT',
		Rosalind_5959:
			'CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC',
		Rosalind_6404:
			'CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAATAATTCTGAGG',
	};

	const entries = Object.entries(fastaObj);

	const fastaStr = `>${entries[0][0]}\n${entries[0][1]}\n>${entries[1][0]}\n${
		entries[1][1]
	}\n>${entries[2][0]}\n${entries[2][1]}`;

	const fastaArr = Object.values(fastaObj);

	describe('fastaToObj', () => {
		it('should correctly parse simple input', () => {
			const actual = fastaToObj(fastaStr);
			expect(actual).toEqual(fastaObj);
		});
	});

	describe('fastaToArray', () => {
		it('should correctly parse simple input', () => {
			expect(fastaToArray(fastaStr)).toEqual(fastaArr);
		});
	});
});
