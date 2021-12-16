function solve() {
  let inputText = document.getElementById("text").value;
  let caseType = document.getElementById("naming-convention").value;
  
  let inputToLowerCase = convertToLowerCase(inputText);

  let splitted = inputToLowerCase.split(" ");
  let result = '';


  if(caseType == 'Pascal Case'){

    for(let i = 0; i < splitted.length; i++){
      result += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length);
    }
    
  }else if(caseType == 'Camel Case'){

    result += splitted[0];
    for(let i = 1; i < splitted.length; i++){
      result += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length);
    }

  }else{
    result += 'Error!';
  }

  document.getElementById("result").textContent = result;

  function convertToLowerCase(text){
    let textToLowerCase = '';
    for(let i = 0; i < text.length; i++) {
      let currentChar = text.charAt(i).toLowerCase();
      textToLowerCase += currentChar;
    }

    return textToLowerCase;
  }
}