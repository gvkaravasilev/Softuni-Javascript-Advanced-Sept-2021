const pizzUni = require('./pizzUni');
const { expect } = require('chai');

describe('pizzUni function tests', () => {
    describe('makeAnOrder tests', () => {
        it('throws error for non-existing pizza', () => {
            expect(() => pizzUni.makeAnOrder({
                orderedPizza: undefined,
                orderedDrink: 'Cola'
            })).to.throw();
        });

        it('returns string with ordered pizza without a drink', () => {
            expect(pizzUni.makeAnOrder({
                orderedPizza: 'Neapolitana'
            })).to.equal("You just ordered Neapolitana");
        });

        it('returns string for full order with pizza and drink', () => {
            expect(pizzUni.makeAnOrder({
                orderedPizza: 'Neapolitana',
                orderedDrink: 'Cola'
            })).to.equal("You just ordered Neapolitana and Cola.");
        });
    });

    describe('getRemainingWork tests', () => {
        it('returns proper string for pizza which is being prepared', () => {
            expect(pizzUni.getRemainingWork([{
                pizzaName: 'Neapolitana',
                status: 'preparing'
            },
            {
                pizzaName: 'Capriccozza',
                status: 'preparing'
            }])).to.equal("The following pizzas are still preparing: Neapolitana, Capriccozza.");
        });

        it('return proper string for pizza which is ready', () => {
            expect(pizzUni.getRemainingWork([{
                pizzaName: 'Neapolitana',
                status: 'ready'
            }])).to.equal('All orders are complete!');
        });
    });

    describe('orderType tests', () => {
        it('return 10% off for a carry out order type', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
        });
        it('returns the total sum without a discount', ()=>{
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
        });
    });
});