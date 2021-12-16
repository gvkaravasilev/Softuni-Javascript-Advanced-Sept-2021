function addItem() {
    let inputText = document.getElementById("newItemText");

    let li = document.createElement("li");

    li.textContent = inputText.value;

    const button = document.createElement('a');
    button.textContent = "[Delete]";
    button.href = "#";

    li.appendChild(button);

    let items =  document.getElementById("items");

    items.appendChild(li);

    inputText.value = '';   
    button.addEventListener('click', onClick);
    

    function onClick(ev){
        let parent = ev.target.parentNode;

        parent.remove();
    }
}