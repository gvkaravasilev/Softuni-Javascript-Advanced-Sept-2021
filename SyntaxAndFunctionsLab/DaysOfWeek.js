function printDaysOfWeek(inputDay){

    let result;

    switch(inputDay){
        case 'Monday':
            result = 1;
            break;
        case 'Tuesday':
            result = 2;
            break;
        case 'Wednesday':
            result = 3;
            break;
        case 'Thursday':
            result = 4;
            break;
        case 'Friday':
            result = 5;
            break;
        case 'Saturday':
            result = 6;
            break;
        case 'Sunday':
            result = 7;
            break;
        default:
            console.log('error');
            break;
    }
    if(result > 0 && result <= 7){
        console.log(result);    
    }
}

printDaysOfWeek('Mech');