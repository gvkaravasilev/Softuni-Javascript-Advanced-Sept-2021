const cinema = require('./cinema');
const {expect} = require('chai');


describe('Cinema tests', () =>{
    describe('show movies tests', () => {
        it('returns available movies', () =>{
            expect(cinema.showMovies(['King Kong', 'Undercover'])).to.equal('King Kong, Undercover');
        });

        it('returns available movies with 1 element', () => {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });

        it('returns proper string for empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });

    describe('Ticker price tests', () => {
        it('returns the Premiere price of a present movie', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
        });

        it('returns the Normal price of a present movie', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });

        it('returns the Discount price of a present movie', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('throws error if there is not such a projection type', () =>{
            expect(() => cinema.ticketPrice('Toshko')).to.throw('Invalid projection type.');
        });
    });

    describe('Swap seats tests', () => {
       it('one param test', () => {
        expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
       });

       it('floating point params', () =>{
        expect(cinema.swapSeatsInHall(1.5, 2)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(2, 1.5)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1.5, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
       });

       it('string params', () => {
        expect(cinema.swapSeatsInHall('a', 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, 'a')).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall('a', 'b')).to.equal('Unsuccessful change of seats in the hall.');
       });

       it('greater than 20', () => {
        expect(cinema.swapSeatsInHall(25, 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, 25)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(25, 25)).to.equal('Unsuccessful change of seats in the hall.');
       });

       it('less than 0 ', () => {
        expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(0, -1)).to.equal('Unsuccessful change of seats in the hall.');
       });

       it('equal seats', () => {
        expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
       });

        it('returns "Successful change of seats in the hall." for correct input', () => {
            expect(cinema.swapSeatsInHall(5, 6)).to.equal("Successful change of seats in the hall.");
        });
    });
});