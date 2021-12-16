class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }

        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        } else {
            if (this.listOfParticipants.some(a => a.name == name)) {
                return `The ${name} is already registered at the camp.`;
            }
            if (this.priceForTheCamp[condition] > money) {
                return `The money is not enough to pay the stay at the camp.`;
            } else {
                this.listOfParticipants.push({
                    name,
                    condition,
                    power: 100,
                    wins: 0
                });

                return `The ${name} was successfully registered.`;
            }
        }
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(p => p.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let guest = this.listOfParticipants.find(p => p.name == name);

            let index = this.listOfParticipants.indexOf(guest);

            this.listOfParticipants.splice(index, 1);

            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let isParticipant1Present = this.listOfParticipants.some(p => p.name == participant1);
        let isParticipant2Present = this.listOfParticipants.some(p => p.name == participant2);
        let equalCondition = true;

        if (participant1 != undefined && !isParticipant1Present || participant2 != undefined && !isParticipant2Present) {
            throw new Error('Invalid entered name/s.');
        } else {
            let participant1Obj = this.listOfParticipants.find(p => p.name == participant1);
            let participant2Obj = this.listOfParticipants.find(p => p.name == participant2);

            if (participant1 != undefined && participant2 != undefined && participant2Obj != undefined && participant1Obj.condition != participant2Obj.condition) {
                equalCondition = false;
                throw new Error('Choose players with equal condition.');
            }

            if (typeOfGame == 'Battleship' && participant2 == undefined) {
                participant1Obj.power += 20;

                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }
            if (typeOfGame == 'WaterBalloonFights' && isParticipant1Present && isParticipant2Present && equalCondition) {
                if (participant1Obj.power > participant2Obj.power) {
                    participant1Obj.wins++;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if (participant2Obj.power > participant1Obj.power) {
                    participant2Obj.wins++;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`;
                }
            }
        }
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((p1, p2) => p2.wins - p1.wins)
            .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



