import fs from 'fs';
import { solutions } from './solutions';

// Functions involved in running the project

const main = (fnName: string): void => {
	const fnNames = Object.keys(solutions);
	// if a valid function name is provided in cli command arg, run it
	// otherwise, run the last function listed
	const fnToRun = solutions[fnName] ? fnName : fnNames[fnNames.length - 1];
	log.info('Running %s:', fnToRun);
	runFn(fnToRun);
};

const getData = (name: string): string | void => {
	try {
		return fs.readFileSync(`./datasets/rosalind_${name}.txt`, 'utf8');
	} catch (e) {
		const firstLine = e.toString().split('\n')[0];
		if (firstLine.includes('no such file or directory')) {
			log.warn('First download dataset for "%s"!', name);
		} else {
			log.error(firstLine);
		}
	}
};

const runFn = (fnName: string): void => {
	const data = getData(fnName);
	if (!data) return;
	const solution = solutions[fnName](data);
	console.log(solution);
	pbcopy(solution);
};

const pbcopy = (data: string) => {
	const proc = require('child_process').spawn('pbcopy');
	proc.stdin.write(data);
	proc.stdin.end();
	log.info('Output copied to clipboard.');
};

enum ConsoleCommand {
	Reset = '\x1b[0m',
	Bright = '\x1b[1m',
	Dim = '\x1b[2m',
	Underscore = '\x1b[4m',
	Blink = '\x1b[5m',
	Reverse = '\x1b[7m',
	Hidden = '\x1b[8m',
	FgBlack = '\x1b[30m',
	FgRed = '\x1b[31m',
	FgGreen = '\x1b[32m',
	FgYellow = '\x1b[33m',
	FgBlue = '\x1b[34m',
	FgMagenta = '\x1b[35m',
	FgCyan = '\x1b[36m',
	FgWhite = '\x1b[37m',
	BgBlack = '\x1b[40m',
	BgRed = '\x1b[41m',
	BgGreen = '\x1b[42m',
	BgYellow = '\x1b[43m',
	BgBlue = '\x1b[44m',
	BgMagenta = '\x1b[45m',
	BgCyan = '\x1b[46m',
	BgWhite = '\x1b[47m',
}

const logFn = (
	mainColor: ConsoleCommand,
	highlightColor: ConsoleCommand,
): Function => (msg: string, highlight: string = ''): void => {
	console.log(
		colorString(msg, mainColor),
		colorString(highlight, highlightColor) + mainColor,
	);
};

const colorString = (str: string, color: ConsoleCommand) =>
	ConsoleCommand.Bright + color + str + ConsoleCommand.Reset;

const log = {
	error: logFn(ConsoleCommand.FgRed, ConsoleCommand.FgYellow),
	warn: logFn(ConsoleCommand.FgYellow, ConsoleCommand.FgCyan),
	info: logFn(ConsoleCommand.FgGreen, ConsoleCommand.FgYellow),
};

main(process.argv[2]);