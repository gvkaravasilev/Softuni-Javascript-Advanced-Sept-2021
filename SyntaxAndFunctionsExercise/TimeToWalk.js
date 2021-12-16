function calculateTimeForWalking(numberSteps, footprintLength, speed){
    let totalMeters = numberSteps * footprintLength;
    let timeForRest = Math.floor((totalMeters / 500)) * 60;
    let speedInMS = speed / 3.6;

    let neededTime = (totalMeters / speedInMS) + timeForRest;

    let hours = Math.floor(neededTime / 3600);
    let minutes = Math.floor(neededTime / 60);
    let seconds = Math.round(neededTime - (minutes * 60));

    console.log(
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );

}

calculateTimeForWalking(2564, 0.70, 5.5);