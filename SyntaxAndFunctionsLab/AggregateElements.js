function aggregateElements(array){
    let sum = 0;
    let inverseSum = 0;
    let concatenate = "";

    for(let i = 0; i < array.length; i++){
        let currentElement = array[i];
        sum += currentElement;
        inverseSum += 1 / currentElement;
        concatenate += currentElement;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenate);
}

aggregateElements([2, 4, 8, 16])