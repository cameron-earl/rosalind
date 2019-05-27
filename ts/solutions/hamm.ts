import { hammingDistance } from '../helpers';

export default (data: string): string => {
	const dnaArr = data.split('\n');
	const distance = hammingDistance(dnaArr[0], dnaArr[1]);

	return distance.toString();
};
