function solution() {
    const inputField = document.querySelector('input');
    const addBtn = document.querySelector('button');
    const listOfGifts = document.querySelector('ul');
    const sentGiftsSection = document.querySelectorAll('.card')[2];
    const sentGiftsList = sentGiftsSection.querySelector('ul');
    const discardedGiftsSection = document.querySelectorAll('.card')[3];
    const discardedGiftsList = discardedGiftsSection.querySelector('ul');

    addBtn.addEventListener('click', addItem);




    function addItem(event) {
        event.preventDefault();

        

        const giftClass = e('li', '', 'gift');

        const sendBtn = e('button', 'Send');
        sendBtn.setAttribute('id', 'sendButton');

        const discardBtn = e('button', 'Discard');
        discardBtn.setAttribute('id', 'discardButton');

        giftClass.innerHTML = `${inputField.value}`;
        giftClass.appendChild(sendBtn);
        giftClass.appendChild(discardBtn);

        listOfGifts.appendChild(giftClass);

        let liArray = Array.from(listOfGifts.querySelectorAll('li'));

        liArray.sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(li => {
            listOfGifts.appendChild(li);
        });

        inputField.value = '';

        sendBtn.addEventListener('click', moveGift);
        discardBtn.addEventListener('click', discardGift);


        function moveGift(event){
            event.preventDefault();
            event.target.remove();
            discardBtn.remove();
            sentGiftsList.appendChild(giftClass);
        }

        function discardGift(event){
            event.preventDefault();

            event.target.remove();
            sendBtn.remove();
            discardedGiftsList.appendChild(giftClass);
        }
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