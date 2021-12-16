function radarLimit(currentSpeed, area){
    let speedLimit = 0;

    switch(area){
        case 'residential':
            speedLimit = 20;
            break;
        case 'city':
           speedLimit = 50;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
    }

    if(currentSpeed <= speedLimit){
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
    }else{
        let speedDifference = currentSpeed - speedLimit;
        let speedingStatus = '';

        if(speedDifference <= 20){
            speedingStatus = 'speeding';
        }else if(speedingStatus <= 40){
            speedingStatus = 'excessive speeding';
        }else{
            speedingStatus = 'reckless driving';
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`);
    }
}

radarLimit(40, 'city');
radarLimit(21, 'residential');
radarLimit(120, 'interstate');
radarLimit(200, 'motorway');