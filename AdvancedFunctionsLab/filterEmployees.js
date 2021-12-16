function filterEmployees(data, criteria){
    const parsedData = JSON.parse(data);
    let[propertyType, targetString] = criteria.split('-');
    const result = [];

    let startNumber = 0;
    for(let employee of parsedData){
        if(criteria === "all"){
            result.push(`${startNumber}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }else if(employee.hasOwnProperty(propertyType)){
            if(employee[propertyType] === targetString){
                result.push(`${startNumber}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            }
        }
        startNumber++;
    }
    console.log(result.join('\n'));
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);

console.log("================================");

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all'
);