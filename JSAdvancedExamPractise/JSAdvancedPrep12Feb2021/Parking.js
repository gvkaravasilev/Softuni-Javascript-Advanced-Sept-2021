class Parking{

    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber){


        if(this.capacity <= this.vehicles.length){
            throw new Error("Not enough parking space.");
        }else{
            this.vehicles.push({carModel, carNumber, payed: false});
            this.capacity--;
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }

    removeCar(carNumber){
        let isFound = this.vehicles.some(obj => obj.carNumber === carNumber);
        let hasntPayed = this.vehicles.some(obj => obj.payed === false);

        

        if(!isFound || hasntPayed){
            if(!isFound){
                throw new Error("The car, you're looking for, is not found.")
            }else if(hasntPayed){
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            }
        }else{
            let car = this.vehicles.find(obj => obj.carNumber == carNumber);

            let index = this.vehicles.indexOf(car);

            this.vehicles.splice(index, 1);
            this.capacity++;

            return `${carNumber} left the parking lot.`
        }

        
    }

    pay(carNumber) {
        let isFound = this.vehicles.some(obj => obj.carNumber === carNumber);
        let hasntPayed = this.vehicles.some(obj => obj.payed === false);

        if(!isFound || !hasntPayed) {
            if(!isFound) {
                throw new Error(`${carNumber} is not in the parking lot.`);
            }else if(!hasntPayed){
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            }
        }else{
            let car = this.vehicles.find(obj => obj.payed === false);

            car.payed = true;

            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }

    getStatistics(carNumber){
        let result = [];
        let payed = '';
        if(carNumber == undefined){
            result.push(`The Parking Lot has ${this.capacity} empty spots left.`);
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
            .forEach(a => {
                if(a.payed == true){
                    payed = 'Has payed ';
                }else{
                    payed = 'Not payed';
                }

                result.push(`${a.carModel} == ${carNumber} - ${payed}`); 
            });
        }else{
            let car = this.vehicles.find(c => c.carNumber == carNumber);

            result.push(`${car.carModel} == ${carNumber} - ${payed}`);
        }

        return result.join('\n');
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


