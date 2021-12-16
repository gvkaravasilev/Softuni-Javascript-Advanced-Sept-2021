function sumOfNumbers(firstInput, secondInput){
    let num1 = Number(firstInput);
    let num2 = Number(secondInput);

    let result = 0;

    for(let i = num1; i <= num2;i++){
        result = result + i;
    }
    return result;
}

console.log(sumOfNumbers('1', '5'));
