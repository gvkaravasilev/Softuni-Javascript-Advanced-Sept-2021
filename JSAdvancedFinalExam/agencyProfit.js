function findProfit(input){
    let companyName = input[0];
    let adultTicketsCount = Number(input[1]);
    let childTicketsCount = Number(input[2]);
    let pricePerAdultTicket = Number(input[3]);
    let servicePrice = Number(input[4]);

    let ticketPerChild = (pricePerAdultTicket * 0.30) + servicePrice;
    pricePerAdultTicket += servicePrice;

    let totalPrice = (adultTicketsCount * pricePerAdultTicket) + (ticketPerChild * childTicketsCount)

    let earning = totalPrice * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${earning.toFixed(2)} lv.`);
}

findProfit(["WizzAir", "15", "5" , "120", "40"]);
findProfit(["Ryanair", "60", "23" , "158.96", "39.12"]);