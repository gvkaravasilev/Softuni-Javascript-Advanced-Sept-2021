function solve(matrix){
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for(let row = 0; row < matrix.length; row++){
        for(col = 0; col < matrix.length; col++){
            if(row == col){
                primaryDiagonalSum += matrix[row][col];
            }

            if(col == matrix.length - row - 1){
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }
    const result = [];

    result.push(primaryDiagonalSum);
    result.push(secondaryDiagonalSum);

    console.log(result.join(' '));
}

solve([[20, 40],
    [10, 60]]
   );
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );