function deleteByEmail() {
    let tableItems = document.querySelector('tbody').children;

    Array.from(tableItems);
    let inputEmail = document.querySelector('input[name = "email"]').value;

    let isFound = false;
    let resultText = document.querySelector('div');


    for (let row = 0; row < tableItems.length; row++) {
        let currentIem = tableItems[row].children[1].textContent;

        if (currentIem == inputEmail) {
            isFound = true;
            tableItems[row].remove();
        }
    }

    if (isFound) {
        resultText.textContent = 'Deleted.';
    } else {
        resultText.textContent = 'Not found.'
    }
}