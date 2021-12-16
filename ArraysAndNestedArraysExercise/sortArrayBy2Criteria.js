function sortArray(array){
    array = array.sort((a, b) => {
        let result = a.length - b.length;

        if(result == 0){
            result = a.localeCompare(b);
        }

        return result;
    });

    console.log(array.join('\n'));
}

sortArray(['alpha', 
'beta', 
'gamma']
);

sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

sortArray(['test', 
'Deny', 
'omen', 
'Default']
);