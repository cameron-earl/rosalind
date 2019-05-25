import { fastaToObj } from '../parsing';

export default (data: string): string => {
	const dataObj = fastaToObj(data);
	const percentObj: { [key: string]: string } = {};
	let maxKey = '';
	let maxPercent = 0;
	for (const key in dataObj) {
		const dna = dataObj[key];
		const gcCount = dna
			.split('')
			.reduce((sum: number, c: string) => sum + +(c === 'G' || c === 'C'), 0);
		const percent = gcCount / dna.length;
		if (maxPercent < percent) {
			maxKey = key;
			maxPercent = percent;
		}
		const percentToPlace = (percent * 100).toFixed(6);
		percentObj[key] = percentToPlace;
	}

	return `${maxKey} ${percentObj[maxKey]}%`;
};
