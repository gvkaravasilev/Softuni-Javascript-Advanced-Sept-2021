function biggerHalf(arr){
    arr.sort((a, b) => a - b);

    let newArr = [];
    let startIndex = arr.length / 2;
    let endIndex = arr.length - 1;

    if(arr.length % 2 == 0){
        newArr = arr.slice(startIndex, endIndex + 1);
    }else{
        newArr = arr.slice(Math.floor(startIndex), endIndex + 1);
    }

    return newArr;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);