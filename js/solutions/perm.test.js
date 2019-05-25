"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var perm_1 = __importStar(require("./perm"));
var sampleOutput = "6\n1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1";
describe('perm', function () {
    it('should pass sample test', function () {
        var input = '3';
        expect(perm_1.default(input)).toEqual(sampleOutput);
    });
});
describe('arrayMinusIdx', function () {
    it('should return [1, 3, 4] given [1, 2, 3, 4] and 1', function () {
        expect(perm_1.arrayMinusIdx([1, 2, 3, 4], 1)).toEqual([1, 3, 4]);
    });
    it('should return [] given [1] and 0', function () {
        expect(perm_1.arrayMinusIdx([1], 0)).toEqual([]);
    });
    it('should return [] given [] and 0', function () {
        expect(perm_1.arrayMinusIdx([], 0)).toEqual([]);
    });
});
