function sort(arr, argument){

    if(argument == 'asc'){
        arr = arr.sort((a, b) => a - b);
    }else if(argument == 'desc'){
        arr = arr.sort((a, b) =>  b - a);
    }

    return arr;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');