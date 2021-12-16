function findEvenPositions(arr){

    const evenPositionsArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            evenPositionsArr.push(arr[i]);
        }
    }

    console.log(evenPositionsArr.join(' '));
}

findEvenPositions(['5', '10']);