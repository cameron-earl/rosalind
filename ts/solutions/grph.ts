import { fastaToObj } from '../parsing';

export default (data: string): string => {
	const fastaObj = fastaToObj(data);
	const links: string[] = [];

	for (const key1 of Object.keys(fastaObj)) {
		const end = fastaObj[key1].slice(-3);
		for (const key2 of Object.keys(fastaObj)) {
			if (key1 === key2) {
				continue;
			}
			const start = fastaObj[key2].slice(0, 3);
			if (start === end) {
				links.push(`${key1} ${key2}`);
			}
		}
	}

	return links.join('\n');
};
