function checkForMagicMatrix(arr){
    

    let matrix = arr.map(row => row.split(' ')
    .filter(x => x != '')
    .map(Number));

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            console.log(matrix[i][j]);
        }
    }

}
checkForMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
checkForMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
checkForMagicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );