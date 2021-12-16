function solve(...arguments) {

    let result = {};
    for (let argument of arguments) {
        console.log(`${typeof argument}: ${argument}`);

        if (!result[typeof (argument)]) {
            result[typeof (argument)] = 1;
        } else {
            result[typeof (argument)]++;
        }
    }
    Object.keys(result).sort((a, b) => result[b] - result[a])
        .forEach(k => console.log(`${k} = ${result[k]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });