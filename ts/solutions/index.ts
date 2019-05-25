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
import { runFn, solutionFn, log } from '../utilities';
import iev from './iev';

const main = (fnName: string): void => {
	const fnNames = Object.keys(solutions);
	// if a valid function name is provided in cli command arg, run it
	// otherwise, run the last function listed
	const fnToRun = solutions[fnName] ? fnName : fnNames[fnNames.length - 1];
	log.info('Running %s:', fnToRun);
	runFn(fnToRun);
};

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

export default main;
