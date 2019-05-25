import { DnaBase } from '../helpers';
import { fastaToArray } from '../parsing';

const { A, C, G, T }: { [key in DnaBase]: DnaBase } = DnaBase;

export default (data: string): string => {
	const dnaArr = fastaToArray(data);
	let consensusStr = '';
	const freqCounts: { [key in DnaBase]: number[] } = {
		[A]: [],
		[C]: [],
		[G]: [],
		[T]: [],
	};
	for (let i = 0; i < dnaArr[0].length; i++) {
		const baseCounts: { [key in DnaBase]: number } = {
			[A]: 0,
			[C]: 0,
			[G]: 0,
			[T]: 0,
		};
		for (const dna of dnaArr) {
			baseCounts[dna[i] as DnaBase]++;
		}
		let maxCount = 0;
		let mostCommonBase: DnaBase = A;
		for (const base of Object.keys(baseCounts)) {
			const b = base as DnaBase;
			freqCounts[b].push(baseCounts[b]);
			if (maxCount < baseCounts[b]) {
				maxCount = baseCounts[b];
				mostCommonBase = b;
			}
		}
		consensusStr += DnaBase[mostCommonBase];
	}
	const freqTable = Object.entries(freqCounts)
		.map((entry: [string, number[]]) => `${entry[0]}: ${entry[1].join(' ')}`)
		.join('\n');
	return `${consensusStr}\n${freqTable}`;
};
