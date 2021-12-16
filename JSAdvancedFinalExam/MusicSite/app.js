window.addEventListener('load', solve);

function solve() {
    const fields = document.querySelectorAll('input');

    const addBtn = document.getElementById('add-btn');
    const collectionsOfSongs = document.querySelector('.all-hits-container');
    const totalLikesSection = document.getElementById('total-likes');
    const savedContainer = document.querySelector('.saved-container');
    const likesDiv = document.querySelector('.likes');
    const likesPar = document.querySelector('.likes p');
    const likesImg = document.querySelector('.likes img');

    const input = {
        genre: fields[0],
        name: fields[1],
        author: fields[2],
        date: fields[3]
    }

    addBtn.addEventListener('click', addSong);


    function addSong(event) {
        event.preventDefault();

        const genre = input.genre.value.trim();
        const name = input.name.value.trim();
        const author = input.author.value.trim();
        const date = input.date.value.trim();

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        const divClass = e('div', '', 'hits-info');

        let img = e('img')
        img.setAttribute('src', "./static/img/img.png");

        const genreH2 = e('h2', `Genre: ${genre}`);
        const nameH2 = e('h2', `Name: ${name}`);
        const authorH2 = e('h2', `Author: ${author}`);
        const dateH3 = e('h3', `Date: ${date}`);

        const saveBtn = e('button', 'Save song', 'save-btn');
        const likeBtn = e('button', 'Like song', 'like-btn');
        const deleteBtn = e('button', 'Delete', 'delete-btn');

        divClass.appendChild(img);
        divClass.appendChild(genreH2);
        divClass.appendChild(nameH2);
        divClass.appendChild(authorH2);
        divClass.appendChild(dateH3);
        divClass.appendChild(saveBtn);
        divClass.appendChild(likeBtn);
        divClass.appendChild(deleteBtn);

        collectionsOfSongs.appendChild(divClass);

        for(let prop in input){
            input[prop].value = '';
        }

        likeBtn.addEventListener('click', incrementLikes);
        saveBtn.addEventListener('click', moveToSaved);
        deleteBtn.addEventListener('click', deleteSong);
        
        

        function incrementLikes() {
            event.preventDefault();
            let likesValue = Number(likesPar.textContent[likesPar.textContent.length - 1]);

            likesImg.remove();
            likesPar.textContent = `Total Likes: ${++likesValue}`;
            likesDiv.appendChild(likesPar);
            likesDiv.appendChild(likesImg);
            totalLikesSection.appendChild(likesDiv)
            likeBtn.disabled = true;
        }

        function moveToSaved(event) {
            event.preventDefault();
            event.target.remove();
            likeBtn.remove();
            savedContainer.appendChild(divClass);
        }

        function deleteSong(event){
            event.preventDefault();
            divClass.remove();
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