"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iprb_1 = __importDefault(require("./iprb"));
describe('iprb', function () {
    it('should return 0.78333 given 2 2 2', function () {
        expect(iprb_1.default('2 2 2')).toEqual('0.78333');
    });
});
