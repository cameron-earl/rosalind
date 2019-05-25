import { dnaToRna, reverseComplement, rnaToProtein } from '../helpers';
import cons from './cons';
import dna from './dna';
import fib from './fib';
import gc from './gc';
import hamm from './hamm';
import iprb from './iprb';
import perm from './perm';
import splc from './splc';
import sseq from './sseq';
import subs from './subs';
import iev from './iev';

export type solutionFn = (data: string) => string;

export const solutions: { [key: string]: solutionFn } = {
	dna,
	rna: dnaToRna,
	revc: reverseComplement,
	iprb,
	fib,
	gc,
	prot: rnaToProtein,
	subs,
	hamm,
	iev,
	// fibd,
	// mrna,
	// lia,
	// prtm,
	// grph,
	// mprt,
	cons,
	// orf,
	splc,
	// lcsm,
	perm,
	// revp
	sseq,
};
