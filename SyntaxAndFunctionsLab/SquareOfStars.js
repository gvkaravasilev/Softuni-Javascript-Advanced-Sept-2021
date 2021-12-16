function printSquareOfStars(size){
    let type = typeof(size);
    
    if(type === 'number'){
        let line = '';
        for(let i = 0; i < size; i++){
            let line = '';
            for(let j = 0; j < size; j++){
                line += '*' + ' ';
            }
            console.log(line);
        }
    }else{
        for(let i = 0; i < 5; i++){
            let line = '';
            for(let j = 0; j < 5; j++){
                line += '*' + ' ';
            }
            console.log(line);
        }
    }
}

printSquareOfStars('toshko');