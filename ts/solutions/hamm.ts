export default (data: string): string => {
	const dnaArr = data.split('\n');
	let distance = 0;
	for (let i = 0; i < dnaArr[0].length; i++) {
		if (dnaArr[0][i] !== dnaArr[1][i]) distance++;
	}

	return distance.toString();
};
