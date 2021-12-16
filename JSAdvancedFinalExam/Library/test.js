const library = require('./library');
const {expect} = require('chai');
const { arrangeTheBooks } = require('./library');


describe('library functions tests', () => {
    describe('calcPriceOfBook tests', () => {
        it('throws an error if nameOfBook is not a string', () => {
            expect(() => library.calcPriceOfBook(1, 3)).to.throw();
        })
        it('throws an error if year is not an integer', () => {
            expect(() => library.calcPriceOfBook('PB', 1.1)).to.throw();
        })
        it('throws an error if both of params are incorrect', () => {
            expect(() => library.calcPriceOfBook(1, 'a')).to.throw();
        })

        it('returns the standart price without a discount', () => {
            expect(library.calcPriceOfBook('PB', 2000)).to.equal(`Price of PB is 20.00`);
        });
        it('return the price with a 50% discount for 1980 year', () => {
            expect(library.calcPriceOfBook('PB', 1980)).to.equal(`Price of PB is 10.00`);
        });

        it('return the price with a 50% discount for a year which is less than 1980', () => {
            expect(library.calcPriceOfBook('PB', 1970)).to.equal(`Price of PB is 10.00`);
        });
    });

    describe('findBook tests', () =>{
        it('throws an error for an empty array', () =>{
            expect(() => library.findBook([], 'Troy')).to.throw();
        });

        it('returns proper string for a present book in the array', () =>{
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.equal("We found the book you want.");
        });

        it('returns proper string if there is not such a book in the array', () =>{
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Okei')).to.equal("The book you are looking for is not here!");
        });
    });

    describe('arrangeTheBooks tests', () => {
        it('throws an error for Nan parameter', () => {
            expect(() => library.arrangeTheBooks('a')).to.throw();
        });
        it('throws an error for a negative number', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw();
        });

        it('returns proper message for insufficient space', () => {
            expect(library.arrangeTheBooks(42)).to.equal("Insufficient space, more shelves need to be purchased.");
        });

        it('returns proper message if there is enough space', () =>{
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it('returns proper message if there is enough space for less than 40 books', () =>{
            expect(library.arrangeTheBooks(35)).to.equal("Great job, the books are arranged.");
        });

    });
});