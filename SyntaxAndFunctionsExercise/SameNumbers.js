function checkForSameDigits(number){
    let digit = number % 10;
    let sum = 0;
    let result = true;

    while(number != 0){
        let currentDigit = number % 10;
        sum += currentDigit;
        number = parseInt(number / 10);
        if(currentDigit != digit){
            result = false;
        }
    }
    if(result){
        console.log(result);
        console.log(sum);
    }else{
        console.log(result);
        console.log(sum);
    }
}

checkForSameDigits(2222222);