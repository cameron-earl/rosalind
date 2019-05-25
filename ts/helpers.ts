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

export const dnaToRna = (dna: string): string => dna.replace(/T/g, 'U');

export const rnaToDna = (rna: string): string => rna.replace(/U/g, 'T');

export const reverseComplement = (dna: string): string =>
	dna
		.split('')
		.map(base => reverseComplements[base as DnaBase])
		.reverse()
		.join('');

export const fastaToObj = (data: string): { [key: string]: string } => {
	const keyVals = data
		.trim()
		.slice(1)
		.split('>');
	const obj: { [key: string]: string } = {};
	for (const keyVal of keyVals) {
		const [key, ...data] = keyVal.split('\n');
		obj[key] = data.join('');
	}
	return obj;
};

export const fastaToArray = (data: string): string[] =>
	Object.values(fastaToObj(data));

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
	GUU: aa.V,
	GUC: aa.V,
	GUA: aa.V,
	GUG: aa.V,
	GCU: aa.A,
	GCC: aa.A,
	GCA: aa.A,
	GCG: aa.A,
	GAU: aa.D,
	GAC: aa.D,
	GAA: aa.E,
	GAG: aa.E,
	GGA: aa.G,
	GGC: aa.G,
	GGG: aa.G,
	GGU: aa.G,
	UAA: aa.Stop,
	UAC: aa.Y,
	UCA: aa.S,
	UAU: aa.Y,
	UCU: aa.S,
	UAG: aa.Stop,
	UCC: aa.S,
	UCG: aa.S,
	UGA: aa.Stop,
	UGC: aa.C,
	UGG: aa.W,
	UGU: aa.C,
	UUA: aa.L,
	UUC: aa.F,
	UUG: aa.L,
	UUU: aa.F,
};

export const rnaToProtein = (rna: string): string =>
	(rna.match(/[\s\S]{1,3}/g) || [])
		.map(codon => rnaCodonProteinMap[codon])
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

export const parseNumberArray = (data: string): number[] =>
	data.split(' ').map(Number);
