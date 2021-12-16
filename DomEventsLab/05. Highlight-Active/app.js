function focused() {
    let fields = Array.from(document.getElementsByTagName('input'));

    for(let field of fields) {
        field.addEventListener('focus', focusField);
        field.addEventListener('blur', blurField);
    }

    function focusField(ev) {
        ev.target.parentNode.className = 'focused';
    }
    function blurField(ev) {
        ev.target.parentNode.className = '';
    }
}