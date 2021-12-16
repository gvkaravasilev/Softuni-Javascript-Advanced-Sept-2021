function operationsPerformer(...arr){
    let number = Number(arr[0]);

    for(let i = 1; i < arr.length; i++){
        let currentOperation = arr[i];

        switch(currentOperation){
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number.toFixed(1));
                break;
        }
    }
}

operationsPerformer('9', 'dice', 'spice', 'chop', 'bake', 'fillet');