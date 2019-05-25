import { parseNumberArray } from '../parsing';

export default (data: string): string => {
	const [AANum, AaNum, aaNum]: number[] = parseNumberArray(data);
	const totalPop = AANum + AaNum + aaNum;
	const popCounts: { [key: string]: number } = {
		AA: AANum,
		Aa: AaNum,
		aa: aaNum,
	};
	const chanceRecessive: { [key: string]: number } = { AA: 0, Aa: 0.5, aa: 1 };
	const percentages: number[] = [];

	for (const first of Object.keys(popCounts)) {
		const firstProb = popCounts[first] / totalPop;
		for (const second of Object.keys(popCounts)) {
			let thisCount = popCounts[second];
			if (first === second) {
				thisCount--;
			}
			const secondProb = firstProb * (thisCount / (totalPop - 1));
			const recessiveChance = chanceRecessive[first] * chanceRecessive[second];
			const dominantChance = 1 - recessiveChance;
			percentages.push(secondProb * dominantChance);
		}
	}

	return percentages.reduce((a: number, b: number) => a + b).toFixed(5);
};
