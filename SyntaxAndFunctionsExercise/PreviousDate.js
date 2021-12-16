function previousDate(year, month, day){

    let date = new Date(`${year}-${month}-${day}`);

    date.setDate(date.getDate() - 1);
    
    

    console.log(date);
}


previousDate(2016, 10, 1);