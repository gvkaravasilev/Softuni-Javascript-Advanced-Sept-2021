function sumLength(str1, str2, str3){

    let totalSum;
    let avgLength;

    let length1 = str1.length;
    let length2 = str2.length;
    let length3 = str3.length;

    totalSum = length1 + length2 + length3;

    avgLength = Math.floor(totalSum / 3);

    console.log(totalSum);
    console.log(avgLength);
}

sumLength('pasta', '5', '22.3');