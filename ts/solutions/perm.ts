export default (data: string): string => {
	const n = +data;
	const arr = new Array(n).fill(0).map((e, i: number) => i + 1);
	const permutations = getAllPermutations(arr);
	return `${permutations.length}\n${permutations
		.map(a => a.join(' '))
		.join('\n')}`;
};

export const getAllPermutations = (arr: number[]): number[][] => {
	if (arr.length <= 1) return [arr];

	let permutations: number[][] = [];

	for (let i = 0; i < arr.length; i++) {
		const startEl = arr[i];
		const truncated = arrayMinusIdx(arr, i);
		const perms = getAllPermutations(truncated).map((permArr: number[]) => [
			startEl,
			...permArr,
		]);
		permutations = [...permutations, ...perms];
	}

	return permutations;
};

export const arrayMinusIdx = <T>(arr: T[], i: number): T[] => {
	return [...arr.slice(0, i), ...arr.slice(i + 1)];
};
