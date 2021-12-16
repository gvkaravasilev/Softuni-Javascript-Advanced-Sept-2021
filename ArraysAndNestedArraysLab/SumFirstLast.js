function sumOfFirstAndLastElementInArray(arr){
    let sum = 0;

    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);

    sum = firstElement + lastElement;

    return sum;
}

console.log(sumOfFirstAndLastElementInArray(['5', '10']));