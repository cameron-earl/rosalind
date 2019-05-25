import { parseNumberArray } from '../parsing';

export default (data: string): string => {
	const populations: number[] = parseNumberArray(data);
	// AA-AA, AA-Aa, AA-aa, Aa-Aa, Aa-aa, aa-aa
	const chanceDominantChild: number[] = [1, 1, 1, 0.75, 0.5, 0];
	const expectedDominantOffspring = populations.reduce(
		(sum: number, pop: number, i: number) => sum + pop * chanceDominantChild[i],
		0,
	);
	return (expectedDominantOffspring * 2).toString();
};
