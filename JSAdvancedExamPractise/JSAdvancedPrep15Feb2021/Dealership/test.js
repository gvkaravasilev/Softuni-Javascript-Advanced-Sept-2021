const dealership = require('./dealership');
const {expect} = require('chai');


describe('dealership function tests', () => {
    describe('newCarCost tests', () => {
        it('return fixex amount of money when the old car is returned', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });

        it('returns the new car price if there is not such a old car in the list', () => {
            expect(dealership.newCarCost('Audi A7', 15000)).to.equal(15000);
        })
    });

    describe('car equipment tests', () => {
        it('returns array with selected extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1,3]))
            .to.deep.equal(['sliding roof', 'navigation']);
        });
    });

    describe('euroCategory tests', () => {
        it('returns proper message for category that is equal or greater than 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('returns proper message for category that is less than 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});