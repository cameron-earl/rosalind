import { AminoAcid, codonsForAminoAcid } from '../helpers';

export default (data: string): string =>
	data
		.trim()
		.split('')
		.map((aa: string) => codonsForAminoAcid(aa as AminoAcid).length)
		.reduce((product: number, n: number) => (product * n) % 1_000_000, 3)
		.toString();
