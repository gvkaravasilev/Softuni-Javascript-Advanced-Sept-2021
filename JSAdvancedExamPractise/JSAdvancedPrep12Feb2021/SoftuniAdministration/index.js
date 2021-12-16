function solve() {
    const lectureName = document.querySelector('input[name="lecture-name"]');
    const dateField = document.querySelector('input[type="datetime-local"]');
    const dropdownMenu = document.querySelector('select[name="lecture-module"]');
    const modules = document.querySelector('.modules');

    const addBtn = document.querySelector('button');

    addBtn.addEventListener('click', addLecture);


    function addLecture(event) {
        event.preventDefault();

        if(lectureName.value.trim() === '' || dateField.value.trim() === '' || dropdownMenu.value === 'Select module'){
            return;
        }

        console.log(dateField.value);

        const date = dateField.value.slice(0, dateField.value.length - 6);
        const hours = dateField.value.slice(11, dateField.value.length);

        

        const moduleClass = e('div', '', 'module');
        const moduleName = e('h3', `${dropdownMenu.value}`);

        moduleClass.appendChild(moduleName);

        const ul = e('ul');
        const liClass = e('li', '', 'flex');
        const moduleInfo = e('h4', `${lectureName.value} - ${date} - ${hours}`);
        const delButton = e('button', 'Del', 'red');

        liClass.appendChild(moduleInfo);
        liClass.appendChild(delButton);

        ul.appendChild(liClass);

        let liArr = Array.from(ul.querySelectorAll('li'));

        let li1 = liArr[0];

        console.log(li1.innerText);

        moduleClass.appendChild(ul);
        modules.append(moduleClass);
    }











    function e(type, content, className) {
        const element = document.createElement(type);
  
  
        element.textContent = content;
  
        if (className) {
           element.className = className;
        }
        return element;
     }
};