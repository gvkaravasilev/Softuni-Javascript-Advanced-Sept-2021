const testNumbers = require("./testNumbers");
const {expect} = require("chai");


describe('Function tests', () => {
    describe('sumNumbers tests', () =>{
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(2,3)).to.equal('5.00');
        });
        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(2, -2)).to.equal('0.00');
        });

        it('works with floating point numbers', () => {
            expect(testNumbers.sumNumbers(1.333, 1.555)).to.equal('2.89');
        });

        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers('5', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers([], '1')).to.be.undefined;
        });
    });

    describe('numberChecker tests', () => {
        it('returns proper string if the number is even', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });

        it('returns proper string if the number is odd', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!')
        })

        it('return proper string for wrong input', () => {
            expect(() => testNumbers.numberChecker('a')).throw();
        });
    });

    describe('averageSumArray tests', () => {
       it('works with integers', () => {
           expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
       });

       it('works with floats', () => {
           expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
       });
    });
});