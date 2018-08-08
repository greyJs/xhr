'use strict';
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.send();

const content = document.querySelector('#content');
content.innerHTML ='';

function onLoad() {

  if (xhr.status !== 200) {
    console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
  } else {
    const catalog = JSON.parse(xhr.responseText);
    let bookNew;
    let i;
    for (const book of catalog) {
      content.appendChild(document.createElement('li'));
      bookNew = document.querySelectorAll('#content > li'); 
      i = catalog.indexOf(book); 
      bookNew[i].innerHTML =`<img src="${book.cover.small}">`;  
      bookNew[i].dataset.title = book.title;  
      bookNew[i].dataset.author = book.author.name; 
      bookNew[i].dataset.info = book.info; 
      bookNew[i].dataset.price = book.price; 
    }
  }
}

