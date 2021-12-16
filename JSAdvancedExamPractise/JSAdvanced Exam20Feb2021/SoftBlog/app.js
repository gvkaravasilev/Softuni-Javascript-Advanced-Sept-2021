function solve() {
   const inputFields = document.querySelectorAll('input');
   const textAreaField = document.querySelector('textarea');

   const createBtn = document.getElementsByClassName('btn create')[0];
   const mainSection = document.querySelectorAll('section')[1];


   const input = {
      author: inputFields[0],
      title: inputFields[1],
      category: inputFields[2],
      textarea: textAreaField
   };

   createBtn.addEventListener('click', createContent);

   function createContent(event) {
      event.preventDefault();

      const author = input.author.value.trim();
      const title = input.title.value.trim();
      const category = input.category.value.trim();
      const textarea = input.textarea.value.trim();


      const articleSection = e('article');

      const h1Element = e('h1', `${title}`);
      const categoryPar = e('p', 'Category:');
      const categoryContent = e('strong', `${category}`);

      categoryPar.appendChild(categoryContent);

      const creatorPar = e('p', 'Creator:');
      const creatorContent = e('strong', `${author}`);

      creatorPar.appendChild(creatorContent);

      const articleContent = e('p', `${textarea}`);

      const buttonsDiv = e('div', '', 'buttons');

      const btnDeleteClass = e('button', 'Delete', 'btn delete');
      const btnArchiveClass = e('button', 'Archive', 'btn archive');

      buttonsDiv.appendChild(btnDeleteClass);
      buttonsDiv.appendChild(btnArchiveClass);

      articleSection.appendChild(h1Element);
      articleSection.appendChild(categoryPar);
      articleSection.appendChild(creatorPar);
      articleSection.appendChild(articleContent);
      articleSection.appendChild(buttonsDiv);

      mainSection.appendChild(articleSection);

      let titleSave = input.title.value;


      for(let prop in input){
         input[prop].value = '';
      }

      btnArchiveClass.addEventListener("click", archive);
      btnDeleteClass.addEventListener("click", deleteArticle);


      function archive() {

         let li = e('li');
         li.textContent = titleSave;

         let ol = document.querySelector('ol');

         ol.appendChild(li);

         let liArr = Array.from(ol.children);

         liArr.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => {
            ol.appendChild(li);
         });

         articleSection.remove();
      }

      function deleteArticle(){
         articleSection.remove();
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
