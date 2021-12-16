function findAndMapOddPos(arr){

    return arr.filter((n , i) => i % 2 !== 0)
    .map(a => a * 2)
    .reverse()
    .join(' ');
}

console.log(findAndMapOddPos([10, 15, 20, 25]));
console.log(findAndMapOddPos([3, 0, 10, 4, 7, 3]));