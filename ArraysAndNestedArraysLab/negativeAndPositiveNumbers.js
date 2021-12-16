function negativeAndPositiveNumbers(arr){
    let newArr = [];

    for(let i = 0; i < arr.length;i++){
        let currentElement = Number(arr[i]);

        if(currentElement < 0){
            newArr.unshift(currentElement);
        }else{
            newArr.push(currentElement);
        }
    }

    console.log(newArr.join("\n"));
}

negativeAndPositiveNumbers([7, -2, 8, 9]);
console.log('------')
negativeAndPositiveNumbers([3, -2, 0, -1]);