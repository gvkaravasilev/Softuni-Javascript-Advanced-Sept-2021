function sortNames(array){
    array = array.sort((a, b) => a.localeCompare(b));

    let startNumber = 1;
    for(i = 0; i < array.length; i++){
        console.log(`${startNumber}.${array[i]}`);

        startNumber++;
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
