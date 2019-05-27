// Functions, enums, and maps useful for solving multiple problems

export enum DnaBase {
	A = 'A',
	C = 'C',
	G = 'G',
	T = 'T',
}
export const d = DnaBase;

export enum RnaBase {
	A = 'A',
	C = 'C',
	G = 'G',
	U = 'U',
}
export const r = RnaBase;

export enum AminoAcid {
	Stop = '',
	A = 'A',
	C = 'C',
	D = 'D',
	E = 'E',
	F = 'F',
	G = 'G',
	H = 'H',
	I = 'I',
	K = 'K',
	L = 'L',
	M = 'M', // Start
	N = 'N',
	P = 'P',
	Q = 'Q',
	R = 'R',
	S = 'S',
	T = 'T',
	V = 'V',
	W = 'W',
	Y = 'Y',
}
export const aa = AminoAcid;

export const reverseComplements: { [key in DnaBase]: DnaBase } = {
	[d.A]: d.T,
	[d.C]: d.G,
	[d.G]: d.C,
	[d.T]: d.A,
};

export const rnaCodonProteinMap: { [key: string]: AminoAcid } = {
	AAA: aa.K,
	AAC: aa.N,
	AAG: aa.K,
	AAU: aa.N,
	ACA: aa.T,
	ACC: aa.T,
	ACG: aa.T,
	ACU: aa.T,
	AGA: aa.R,
	AGC: aa.S,
	AGG: aa.R,
	AGU: aa.S,
	AUA: aa.I,
	AUC: aa.I,
	AUG: aa.M,
	AUU: aa.I,
	CAA: aa.Q,
	CAC: aa.H,
	CAG: aa.Q,
	CAU: aa.H,
	CCA: aa.P,
	CCC: aa.P,
	CCG: aa.P,
	CCU: aa.P,
	CGA: aa.R,
	CGC: aa.R,
	CGG: aa.R,
	CGU: aa.R,
	CUA: aa.L,
	CUC: aa.L,
	CUG: aa.L,
	CUU: aa.L,
	GAA: aa.E,
	GAC: aa.D,
	GAG: aa.E,
	GAU: aa.D,
	GCA: aa.A,
	GCC: aa.A,
	GCG: aa.A,
	GCU: aa.A,
	GGA: aa.G,
	GGC: aa.G,
	GGG: aa.G,
	GGU: aa.G,
	GUA: aa.V,
	GUC: aa.V,
	GUG: aa.V,
	GUU: aa.V,
	UAA: aa.Stop,
	UAC: aa.Y,
	UAG: aa.Stop,
	UAU: aa.Y,
	UCA: aa.S,
	UCC: aa.S,
	UCG: aa.S,
	UCU: aa.S,
	UGA: aa.Stop,
	UGC: aa.C,
	UGG: aa.W,
	UGU: aa.C,
	UUA: aa.L,
	UUC: aa.F,
	UUG: aa.L,
	UUU: aa.F,
};

export const dnaToRna = (dna: string): string => dna.replace(/T/g, 'U');

export const rnaToDna = (rna: string): string => rna.replace(/U/g, 'T');

export const reverseComplement = (dna: string): string =>
	dna
		.split('')
		.map((base: string) => reverseComplements[base as DnaBase])
		.reverse()
		.join('');

export const rnaToProtein = (rna: string): string =>
	(rna.match(/[\s\S]{1,3}/g) || [])
		.map((codon: string) => rnaCodonProteinMap[codon])
		.join('');

export const dnaToProtein = (dna: string): string =>
	rnaToProtein(dnaToRna(dna));

export const motifLocations = (na: string, motif: string): number[] => {
	const oneBasedIndices = [];
	for (let i = 0; i < na.length - motif.length + 1; i++) {
		const substr = na.slice(i, i + motif.length);
		if (substr === motif) {
			oneBasedIndices.push(i + 1);
		}
	}
	return oneBasedIndices;
};

export const codonsForAminoAcid = (given: AminoAcid): string[] =>
	Object.keys(rnaCodonProteinMap).filter(
		(codon: string) => given === rnaCodonProteinMap[codon],
	);

export const findSplitSubseq = (na: string, subSeq: string): number[] => {
	const locations: number[] = [];
	for (const base of subSeq) {
		const lastIdx = locations.length ? locations[locations.length - 1] : -1;
		const i = na.indexOf(base, lastIdx + 1);
		if (i < 0) {
			return [];
		}
		locations.push(i);
	}
	return locations;
};

export const hammingDistance = (na1: string, na2: string): number => {
	let distance = 0;
	if (na1.length !== na2.length) {
		return -1;
	}
	for (let i = 0; i < na1.length; i++) {
		if (na1[i] !== na2[i]) {
			distance++;
		}
	}
	return distance;
};
