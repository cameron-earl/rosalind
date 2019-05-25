import { fastaToObj, rnaToProtein, motifLocations } from './helpers';

describe('fastaToObj', () => {
	it('should correctly parse simple input', () => {
		const input = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
TCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
ATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
TGGGAACCTGCGGGCAGTAGGTGGAAT`;
		const actual = fastaToObj(input);
		const keyValArr = Object.entries(actual);
		expect(keyValArr.length).toEqual(3);
		expect(actual['Rosalind_5959']).toEqual(
			'CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATTTGTCAGCAGACACGC',
		);
	});
});

describe('rnaToProtein', () => {
	it('should return protein string correctly', () => {
		const input = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA';
		expect(rnaToProtein(input)).toEqual('MAMAPRTEINSTRING');
	});
});

describe('motifLocations', () => {
	it('should return [2, 4, 10] given subs sample data', () => {
		const na = 'GATATATGCATATACTT';
		const motif = 'ATAT';
		const expected = [2, 4, 10];
		const actual = motifLocations(na, motif);

		expect(actual).toEqual(expected);
	});

	it('should find motif at end of nucleic acid', () => {
		const na = 'GATTACATAT';
		const motif = 'ATAT';
		const expected = [7];
		const actual = motifLocations(na, motif);

		expect(actual).toEqual(expected);
	});
});
