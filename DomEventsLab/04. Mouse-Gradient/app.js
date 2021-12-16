function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', gradientIn);
    gradient.addEventListener('mouseout', gradientOut);
    const result = document.getElementById('result');

    function gradientIn(ev) {
        const box = ev.target.clientWidth;
        const position = ev.offsetX;

        const percentage = Math.floor((position / box) * 100);

        result.textContent = `${percentage}%`
    }

    function gradientOut(ev) {
        result.textContent = '';
    }
}