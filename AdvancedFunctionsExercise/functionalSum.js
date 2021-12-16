function sum(number){
    let sum = number;

    function add(number2){
        sum += number2;

        return add;
    }

    add.toString = () => {
        return sum;
    }

    return add;
}

console.log(sum(4)(3).toString());
console.log(sum(1)(6)(-3));