import { fastaToArray } from '../parsing';

export default (data: string): string => {
	const [dna, subSeq]: string[] = fastaToArray(data);
	const locations: number[] = [];
	for (const c of subSeq) {
		const lastIdx = locations.length ? locations[locations.length - 1] : -1;
		const i = dna.indexOf(c, lastIdx + 1);
		if (i < 0) {
			return '';
		}
		locations.push(i);
	}
	return locations.map((n: number) => n + 1).join(' ');
};
