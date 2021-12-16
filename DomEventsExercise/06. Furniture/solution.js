function solve() {

  const[input, output] = document.querySelectorAll('textarea');
  const[generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', generate);


  function generate(e){
    const data = JSON.parse(input.value);

    const row = document.createElement('tr');
    const imgCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const decFactorCell = document.createElement('td');


  }
}