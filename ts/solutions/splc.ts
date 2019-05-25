import { dnaToProtein, fastaToArray } from '../helpers';

export default (data: string) => {
	let [dna, ...introns] = fastaToArray(data);

	for (let intron of introns) {
		const regexp = new RegExp(intron, 'g');
		dna = dna.replace(regexp, '');
	}

	return dnaToProtein(dna);
};
