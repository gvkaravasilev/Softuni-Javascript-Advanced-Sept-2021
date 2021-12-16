function solve(arr){
    const result = [];

    let initialNumber = 1;

    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] == 'add'){
            result.push(initialNumber);
        }else{
            result.pop();
        }

        initialNumber++;
    }

    if(result.length > 0){
        console.log(result.join('\n'));
    }else{
        console.log('Empty');
    }

}

solve(['add', 
'add', 
'add', 
'add']
);

console.log('----')

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

console.log('----')

solve(['remove', 
'remove', 
'remove']
);