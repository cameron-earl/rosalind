import { dnaToProtein } from '../helpers';
import { fastaToArray } from '../parsing';

export default (data: string): string => {
	// tslint:disable:prefer-const
	let [dna, ...introns]: string[] = fastaToArray(data);

	for (const intron of introns) {
		const regexp = new RegExp(intron, 'g');
		dna = dna.replace(regexp, '');
	}

	return dnaToProtein(dna);
};
