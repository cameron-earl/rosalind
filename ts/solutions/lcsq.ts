import { DnaBase, findSplitSubseq } from '../helpers';
import { fastaToArray } from '../parsing';

export default (data: string): string => {
	const [str1, str2] = fastaToArray(data);
	return optimalLCS(str1, str2);
};

// adapted from https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence/longestCommonSubsequence.js
export const optimalLCS = (str1: string, str2: string): string => {
	// Init LCS matrix.
	const lcsMatrix = Array(str2.length + 1)
		.fill(null)
		.map(() => Array(str1.length + 1).fill(0));

	// Fill rest of the column that correspond to each of two strings.
	for (let row = 1; row <= str2.length; row++) {
		for (let col = 1; col <= str1.length; col++) {
			if (str1[col - 1] === str2[row - 1]) {
				lcsMatrix[row][col] = lcsMatrix[row - 1][col - 1] + 1;
			} else {
				lcsMatrix[row][col] = Math.max(
					lcsMatrix[row - 1][col],
					lcsMatrix[row][col - 1],
				);
			}
		}
	}

	// console.log(lcsMatrix);
	// read string using lcsMatrix
	let returnStr = '';
	let rowIdx = lcsMatrix.length - 1;
	let colIdx = lcsMatrix[0].length - 1;
	const maxLen = lcsMatrix[rowIdx][colIdx];
	while (returnStr.length < maxLen) {
		while (lcsMatrix[rowIdx][colIdx] === lcsMatrix[rowIdx][colIdx - 1]) {
			colIdx--;
		}
		while (lcsMatrix[rowIdx][colIdx] === lcsMatrix[rowIdx - 1][colIdx]) {
			rowIdx--;
		}
		rowIdx--;
		colIdx--;
		returnStr = str1[colIdx] + returnStr;
	}
	return returnStr;
};

// export interface IStringStartEnd {
// 	commonStart: string;
// 	commonEnd: string;
// 	mid1: string;
// 	mid2: string;
// }

// export const longestSplitSubseq = (
// 	str1: string,
// 	str2: string,
// 	MAX_STRING_COUNT: number = 300,
// ): string => {
// 	const { str1: trimmed1, str2: trimmed2 } = trimUniqueCharacters(str1, str2);

// 	if (trimmed1 === trimmed2) {
// 		return trimmed1;
// 	}

// 	const { commonStart, commonEnd, mid1, mid2 } = trimCommonStringStartEnd(
// 		trimmed1,
// 		trimmed2,
// 	);

// 	if (!mid1 || !mid2) {
// 		return commonStart + commonEnd;
// 	}

// 	// just in case we got lucky and the smaller string is inside the larger
// 	const longerStr = mid1.length > mid2.length ? mid1 : mid2;
// 	const shorterStr = mid1.length > mid2.length ? mid2 : mid1;
// 	if (containsSubseq(longerStr, shorterStr)) {
// 		return commonStart + shorterStr + commonEnd;
// 	}
// 	// now to brute force
// 	let workingList: string[] = Object.values(DnaBase);

// 	for (let i = 0; i < shorterStr.length; i++) {
// 		const passing: { [key: string]: number } = {};
// 		const filterObj: { [key: string]: string } = {};
// 		for (const subseq of workingList) {
// 			for (const base of Object.values(DnaBase)) {
// 				const seq = subseq + base;
// 				const end1 = subSeqEnd(shorterStr, seq);
// 				if (!end1) {
// 					continue;
// 				}
// 				const end2 = subSeqEnd(longerStr, seq);
// 				if (end2) {
// 					passing[seq] = end1 + end2;
// 					filterObj[end1 + '-' + end2] = seq;
// 				}
// 			}
// 		}
// 		if (Object.keys(passing).length) {
// 			workingList = Object.values(filterObj)
// 				.sort((a: string, b: string) => passing[a] - passing[b])
// 				.slice(0, MAX_STRING_COUNT);
// 		} else {
// 			return commonStart + workingList[0] + commonEnd;
// 		}
// 	}

// 	return commonStart + commonEnd;
// };

// export const trimUniqueCharacters = (
// 	str1: string,
// 	str2: string,
// ): { str1: string; str2: string } => {
// 	if (!str1 || !str2) {
// 		return { str1: '', str2: '' };
// 	}
// 	const str1Chars: { [key: string]: boolean } = {};
// 	const str2Chars: { [key: string]: boolean } = {};
// 	for (const char of str1) {
// 		str1Chars[char] = true;
// 		str2Chars[char] = false;
// 	}

// 	for (const char of str2) {
// 		str2Chars[char] = true;
// 		if (!str1Chars[char]) {
// 			str1Chars[char] = false;
// 		}
// 	}

// 	for (const char of Object.keys(str1Chars)) {
// 		const regexp = new RegExp(char, 'g');
// 		if (!str2Chars[char]) {
// 			str1 = str1.replace(regexp, '');
// 		}
// 		if (!str1Chars[char]) {
// 			str2 = str2.replace(regexp, '');
// 		}
// 	}

// 	return { str1, str2 };
// };

// export const trimCommonStringStartEnd = (
// 	str1: string,
// 	str2: string,
// ): IStringStartEnd => {
// 	const commonStart = commonStringStart(str1, str2);
// 	const commonEnd = commonStringEnd(str1, str2);
// 	const mid1 = trimOffStringStartEnd(
// 		str1,
// 		commonStart.length,
// 		commonEnd.length,
// 	);
// 	const mid2 = trimOffStringStartEnd(
// 		str2,
// 		commonStart.length,
// 		commonEnd.length,
// 	);
// 	return { commonStart, commonEnd, mid1, mid2 };
// };

// export const trimOffStringStartEnd = (
// 	str: string,
// 	start: number,
// 	end: number,
// ): string => str.slice(start, end * -1 || undefined);

// export const commonStringStart = (str1: string, str2: string): string => {
// 	if (!str1 || !str2) {
// 		return '';
// 	}
// 	if (str1[0] === str2[0]) {
// 		return str1[0] + commonStringStart(str1.slice(1), str2.slice(1));
// 	}
// 	return '';
// };

// export const commonStringEnd = (str1: string, str2: string): string => {
// 	if (!str1 || !str2) {
// 		return '';
// 	}
// 	if (str1[str1.length - 1] === str2[str2.length - 1]) {
// 		return (
// 			commonStringEnd(str1.slice(0, -1), str2.slice(0, -1)) +
// 			str1[str1.length - 1]
// 		);
// 	}
// 	return '';
// };

// export const containsSubseq = (na: string, subseq: string): boolean =>
// 	!!findSplitSubseq(na, subseq).length;

// export const subSeqEnd = (na: string, subseq: string): number => {
// 	const arr = findSplitSubseq(na, subseq);
// 	if (!arr.length) {
// 		return 0;
// 	} else {
// 		return arr[arr.length - 1];
// 	}
// };
