"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var solutions_1 = require("./solutions");
exports.getData = function (name) {
    try {
        return fs_1.default.readFileSync("./datasets/rosalind_" + name + ".txt", 'utf8');
    }
    catch (e) {
        var firstLine = e.toString().split('\n')[0];
        if (firstLine.includes('no such file or directory')) {
            exports.log.warn('First download dataset for "%s"!', name);
        }
        else {
            exports.log.error(firstLine);
        }
    }
};
exports.runFn = function (fnName) {
    var data = exports.getData(fnName);
    if (!data)
        return;
    var solution = solutions_1.solutions[fnName](data);
    console.log(solution);
    pbcopy(solution);
};
var pbcopy = function (data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data);
    proc.stdin.end();
    exports.log.info('Output copied to clipboard.');
};
var ConsoleCommand;
(function (ConsoleCommand) {
    ConsoleCommand["Reset"] = "\u001B[0m";
    ConsoleCommand["Bright"] = "\u001B[1m";
    ConsoleCommand["Dim"] = "\u001B[2m";
    ConsoleCommand["Underscore"] = "\u001B[4m";
    ConsoleCommand["Blink"] = "\u001B[5m";
    ConsoleCommand["Reverse"] = "\u001B[7m";
    ConsoleCommand["Hidden"] = "\u001B[8m";
    ConsoleCommand["FgBlack"] = "\u001B[30m";
    ConsoleCommand["FgRed"] = "\u001B[31m";
    ConsoleCommand["FgGreen"] = "\u001B[32m";
    ConsoleCommand["FgYellow"] = "\u001B[33m";
    ConsoleCommand["FgBlue"] = "\u001B[34m";
    ConsoleCommand["FgMagenta"] = "\u001B[35m";
    ConsoleCommand["FgCyan"] = "\u001B[36m";
    ConsoleCommand["FgWhite"] = "\u001B[37m";
    ConsoleCommand["BgBlack"] = "\u001B[40m";
    ConsoleCommand["BgRed"] = "\u001B[41m";
    ConsoleCommand["BgGreen"] = "\u001B[42m";
    ConsoleCommand["BgYellow"] = "\u001B[43m";
    ConsoleCommand["BgBlue"] = "\u001B[44m";
    ConsoleCommand["BgMagenta"] = "\u001B[45m";
    ConsoleCommand["BgCyan"] = "\u001B[46m";
    ConsoleCommand["BgWhite"] = "\u001B[47m";
})(ConsoleCommand || (ConsoleCommand = {}));
var logFn = function (mainColor, highlightColor) { return function (msg, highlight) {
    if (highlight === void 0) { highlight = ''; }
    console.log(colorString(msg, mainColor), colorString(highlight, highlightColor) + mainColor);
}; };
var colorString = function (str, color) {
    return ConsoleCommand.Bright + color + str + ConsoleCommand.Reset;
};
exports.log = {
    error: logFn(ConsoleCommand.FgRed, ConsoleCommand.FgYellow),
    warn: logFn(ConsoleCommand.FgYellow, ConsoleCommand.FgCyan),
    info: logFn(ConsoleCommand.FgGreen, ConsoleCommand.FgYellow),
};
