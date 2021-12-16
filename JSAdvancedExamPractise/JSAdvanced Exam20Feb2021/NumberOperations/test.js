const numberOperations = require('./numberOperations');
const {expect} = require('chai');

describe('Number operations tests', () => {
    describe('powNumber tests', () => {
        it('returns power of a given number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });

    describe('numberChecker tests', () => {
        it('throws an error if the parameter is not a number', () => {
            expect(() => numberOperations.numberChecker('a')).throw();
        });

        it('returns proper string for a number that is less than 100', () => {
            expect(numberOperations.numberChecker(88)).to.equal("The number is lower than 100!");
        });

        it('returns proper string for a number that is equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
        });
        it('returns proper string for a number that is greater than 100', () => {
            expect(numberOperations.numberChecker(105)).to.equal("The number is greater or equal to 100!");
        });
    });

    describe('sumArrays tests', () => {
        it('returns the sum of two arrays of integers', () => {
            expect(numberOperations.sumArrays([2,2,3],[1,2,3])).to.deep.equal([ 3, 4, 6 ]);
        });
    });
});