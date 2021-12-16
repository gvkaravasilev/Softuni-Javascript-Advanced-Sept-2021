function solve(array){

    let currentBiggest = array[0];
    const result = [];
    result.push(currentBiggest);

    for(let i = 0; i < array.length; i++){
        if(array[i + 1] >= currentBiggest){
            currentBiggest = array[i + 1];
            result.push(currentBiggest);
        }
    }

    return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );

solve([1, 
    2, 
    3,
    4]
    );
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );