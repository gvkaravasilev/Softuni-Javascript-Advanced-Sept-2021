window.addEventListener('load', solve);

function solve() {
    const inputFields = document.querySelectorAll('.store input');
    const descriptionArea = document.querySelector('.store textarea');
    const addBtn = document.getElementById('add');
    const totalPrice = document.querySelector('.total-price')

    const furnitureList = document.getElementById('furniture-list');


    const input = {
        model: inputFields[0],
        year: inputFields[1],
        description: descriptionArea,
        price: inputFields[2]
    }

    addBtn.addEventListener('click', addFurniture);




    function addFurniture(event) {

        event.preventDefault();

        const model = input.model.value.trim();
        const year = Number(input.year.value.trim());
        const descriptionArea = input.description.value.trim();
        const price = Number(input.price.value.trim());


        if (model == '' || input.year.value.trim() == ''
            || year < 0 || descriptionArea == '' || input.price.value.trim() == '' || price < 0) {
            return;
        }

        let tr = e('tr', '', 'info');
        let tdModel = e('td', `${model}`);
        let tdPrice = e('td', `${price.toFixed(2)}`);

        let td = e('td');
        let moreBtn = e('button', 'More Info', 'moreBtn')
        let buyBtn = e('button', 'Buy it', 'buyBtn');

        td.appendChild(moreBtn);
        td.appendChild(buyBtn);

        let hideClass = e('tr', '', 'hide');
        let tdYear = e('td', `Year: ${year}`);
        let tdDescription = e('td', `Description: ${descriptionArea}`);

        

        tdDescription.setAttribute('colspan', '3');

        hideClass.appendChild(tdYear);
        hideClass.appendChild(tdDescription);

        tr.appendChild(tdModel);
        tr.appendChild(tdPrice);
        tr.appendChild(td);


        furnitureList.appendChild(tr);
        furnitureList.appendChild(hideClass);

        moreBtn.addEventListener('click', onToggle);

        function onToggle() {
            if(moreBtn.textContent == 'More Info'){
                moreBtn.textContent = 'More Info' ? 'Less Info' : 'More Info';
                hideClass.style.display = 'none' ? 'contents' : 'none';
            }else{
                moreBtn.textContent = 'Less Info' ? 'More Info' : 'Less Info' ;
                hideClass.style.display = 'contents' ? 'none' : 'contents';
            }
        }


        buyBtn.addEventListener('click', showTotalPrice);


        function showTotalPrice(){
            tr.remove();
            hideClass.remove();

            totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
        }

        input.model.value = "";
        input.year.value = "";
        input.description.value = "";
        input.price.value = "";
    }

    function e(type, content, className) {
        const element = document.createElement(type);


        element.textContent = content;

        if (className) {
            element.className = className;
        }
        return element;
    }
}
