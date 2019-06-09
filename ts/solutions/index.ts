/* tslint:disable:object-literal-sort-keys */

import { dnaToRna, reverseComplement, rnaToProtein } from '../helpers';
import cons from './cons';
import dna from './dna';
import edit from './edit';
import fib from './fib';
import fibd from './fibd';
import gc from './gc';
import grph from './grph';
import hamm from './hamm';
import iev from './iev';
import iprb from './iprb';
import lcsq from './lcsq';
import mrna from './mrna';
import perm from './perm';
import splc from './splc';
import sseq from './sseq';
import subs from './subs';

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
	fibd,
	mrna,
	// lia,
	// prtm,
	grph,
	// mprt,
	cons,
	// orf,
	splc,
	// lcsm,
	perm,
	// revp
	sseq,
	lcsq,
	edit,
};
