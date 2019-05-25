import { dnaToProtein } from '../helpers';
import { fastaToArray } from '../parsing';

export default (data: string) => {
	let [dna, ...introns] = fastaToArray(data);

	for (let intron of introns) {
		const regexp = new RegExp(intron, 'g');
		dna = dna.replace(regexp, '');
	}

	return dnaToProtein(dna);
};
