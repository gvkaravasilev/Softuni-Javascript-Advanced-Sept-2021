function validate() {
    let inputField = document.getElementById('email');

    let regex = /^([a-z]+@[a-z]+\.[a-z]+)$/;

    inputField.addEventListener('change', onChange);

    function onChange(ev) {
        if (inputField.value.match(regex)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}