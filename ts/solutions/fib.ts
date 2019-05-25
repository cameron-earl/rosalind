import { parseNumberArray } from '../parsing';

export default (data: string): string => {
	const [n, k] = parseNumberArray(data);
	const seq = [1, 1];
	for (let i = 0; i < n - 2; i++) {
		seq.push(seq[i] * k + seq[i + 1]);
	}
	return seq[n - 1].toString();
};
