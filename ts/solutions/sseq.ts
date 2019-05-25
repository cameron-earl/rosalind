import { fastaToArray } from '../helpers';

export default (data: string): string => {
	let [dna, subSeq] = fastaToArray(data);
	const locations: number[] = [];
	for (let c of subSeq) {
		const lastIdx = locations.length ? locations[locations.length - 1] : -1;
		const i = dna.indexOf(c, lastIdx + 1);
		if (i < 0) return '';
		locations.push(i);
	}
	return locations.map(n => n + 1).join(' ');
};
