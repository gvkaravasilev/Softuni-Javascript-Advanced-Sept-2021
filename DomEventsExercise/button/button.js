const button = document.getElementById('btn');

button.addEventListener('click', increment);

function increment(ev){
    let value = Number(ev.target.innerHTML);
    value++;

    ev.target.innerHTML = value;
}