function findSliceOfArr(arr, startingFlavor, endingFlavor){


    let newArr = [];

    let startingIndex = arr.indexOf(startingFlavor);
    let endingIndex = arr.indexOf(endingFlavor);

    newArr = arr.slice(startingIndex, endingIndex + 1);

    return newArr;
}

console.log(findSliceOfArr(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))

console.log(findSliceOfArr(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))