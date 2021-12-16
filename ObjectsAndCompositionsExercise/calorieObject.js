function composeObject(array) {

    const object = {};


    for (let i = 0; i < array.length; i += 2) {
        object[array[i]] = Number(array[i + 1]);
    }

    console.log(object);
}

composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);