function findSmallestTwoNumbers(arr){
    let smallestNumArr = [];

    smallestNumArr = arr.sort((a, b) => a - b).slice(0, 2);

    console.log(smallestNumArr.join(' '));
}

findSmallestTwoNumbers([30, 15, 50, 5]);
findSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);