function addItem() {
    let inputText = document.getElementById("newItemText").value;

    let li = document.createElement("li");

    li.textContent = inputText;

    document.getElementById("items").appendChild(li);

    document.getElementById("newItemText").value = '';
}