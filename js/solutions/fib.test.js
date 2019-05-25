"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fib_1 = __importDefault(require("./fib"));
describe('fib', function () {
    it('should return "19" when given "5 3"', function () {
        expect(fib_1.default('5 3')).toEqual('19');
    });
});
