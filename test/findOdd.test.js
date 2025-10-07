import { expect } from 'chai';
import { describe, it } from 'mocha';
import { findOdd } from '../findOdd.js';

describe("findOdd", () => {
    it("should return 7 for [7]", () => {
        const input = [7];
        const expected = 7;
        expect(findOdd(input)).to.equal(expected);
    });
    it("should return 0 for [0]", () => {
        const input = [0];
        const expected = 0;
        expect(findOdd(input)).to.equal(expected);
    });
});