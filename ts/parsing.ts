export const parseNumberArray = (data: string): number[] =>
	data.split(' ').map(Number);

export const fastaToObj = (data: string): { [key: string]: string } => {
	const keyVals = data
		.trim()
		.slice(1)
		.split('>');
	const obj: { [key: string]: string } = {};
	for (const keyVal of keyVals) {
		const [key, ...naArr]: string[] = keyVal.split('\n');
		obj[key] = naArr.join('');
	}
	return obj;
};

export const fastaToArray = (data: string): string[] =>
	Object.values(fastaToObj(data));
