import { parseNumberArray } from '../parsing';

export default (data: string): string => {
	const [end, lifespan] = parseNumberArray(data);

	let pops: bigint[] = new Array(lifespan).fill(0n);
	pops[0] = 1n;
	for (let month = 1; month < end; month++) {
		const newBabies = sumBigIntArr(allButFirst(pops));
		pops = [newBabies, ...allButLast(pops)];
	}
	return sumBigIntArr(pops).toString();
};

export const sumBigIntArr = (arr: bigint[]): bigint =>
	arr.reduce((a, b) => a + b, 0n);

export const allButFirst = <T>(arr: T[]): T[] => arr.slice(1);

export const allButLast = <T>(arr: T[]): T[] => arr.slice(0, arr.length - 1);
