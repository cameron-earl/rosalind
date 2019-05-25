"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subs_1 = __importDefault(require("./subs"));
describe('subs', function () {
    it('should pass sample test', function () {
        var data = 'GATATATGCATATACTT\nATAT';
        expect(subs_1.default(data)).toEqual('2 4 10');
    });
});
