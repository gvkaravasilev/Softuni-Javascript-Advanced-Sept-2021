function getFibonator(){
    let num1 = 0;
    let num2 = 1;

    function fib(){
        let oldNum1 = num1;
        let oldNum2 = num2;

        num1 = oldNum2;
        num2 = oldNum1 + oldNum2;

        return num1;
    }

    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
