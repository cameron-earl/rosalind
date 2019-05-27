import { findSplitSubseq } from '../helpers';
import { fastaToArray } from '../parsing';

export default (data: string): string => {
	const [dna, subSeq]: string[] = fastaToArray(data);
	return findSplitSubseq(dna, subSeq)
		.map((n: number) => n + 1)
		.join(' ');
};
