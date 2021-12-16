function attachEventsListeners() {
    let fields = document.querySelectorAll('div');


    for (let field of fields) {
        const button = field.children[2];
        let inputField = field.children[1];

        button.addEventListener('click', convertClick);

        function convertClick(e) {
            let buttonId = e.target.id;

            switch (buttonId) {
                case 'daysBtn':
                    inputField.value = inputField.value[0];
                    break;
                case 'hoursBtn':
                    break;
                case 'minutesBtn':
                    break;
                case 'secondsBtn':
                    break;
            }
        }
    }


}
