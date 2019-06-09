import { editDistance } from '../helpers';
import { fastaToArray } from '../parsing';

export default (data: string): string => {
	const [str1, str2] = fastaToArray(data);
	return editDistance(str1, str2).toString();
};
