function findGCD(number1, number2){
    while(number2 != 0){
        let temp = number1;
        number1 = number2;
        number2 = temp % number2; 
    }
    console.log(number1);
}

findGCD(2154, 458);