function numberSequence(n, k){
    let arr = [1];

    for(let i = 1; i < n; i++){
        let startIndex = 0;
        let sum = 0;

        if(k <= i){
            startIndex = i - k;
        }


        for(let j = startIndex;j < i; j++){
            sum += arr[j];
        }

        arr.push(sum);
    }

    return arr;
}

console.log(numberSequence(6, 3));