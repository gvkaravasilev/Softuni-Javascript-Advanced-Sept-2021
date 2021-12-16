class ChristmasDinner {
    constructor(budget) {

        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }



    shopping(product) {

        let [type, price] = product;

        if (this.budget >= price) {
            this.products.push(type);
            this.budget -= price;

            return `You have successfully bought ${type}!`
        } else {
            throw new Error("Not enough money to buy this product");
        }
    }

    recipes(recipe) {
        const { recipeName, productsList } = recipe;
        let isPresent = true;

        for (let currentProduct of productsList) {
            if (!this.products.includes(currentProduct)) {
                isPresent = false;
            }
        }

        if (isPresent) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error("We do not have this product");
        }
    }

    inviteGuests(name, dish) {
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error("We do not have this dish");
        }

        if (name in this.guests) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }


    showAttendance(){

        let result = [];
        Object.keys(this.guests).forEach(guestName =>{
            let dish = this.guests[guestName];
            let products = [];

            this.dishes.forEach(d => {
                if(d.recipeName == dish){
                    products = d.productsList;
                }
            });

            result.push(`${guestName} will eat ${dish}, which consists of ${products.join(', ')}`);
        });

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
