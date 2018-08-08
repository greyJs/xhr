'use strict';
const headers = document.querySelector('nav a');
const tabs = document.querySelector('.tabs nav');
const content = document.querySelector('#content');
    
function tabActive(el){
const element = el ? el.target : document.getElementsByClassName("active")[0];

    if (el){ 
    el.preventDefault();
}

let xhr = new XMLHttpRequest();
      xhr.open("GET",element.href,true);
      xhr.onload = onLoad;
      preloader.classList.remove("hidden");
      
      function onLoad() {
        preloader.classList.add("hidden");
        const data = this.responseText;
        content.innerHTML = data;
      }
      xhr.send();
function active(el){
let current = document.getElementsByClassName("active")[0];
        current.classList.remove("active");
        element.classList.add("active");
      }
      active(el);
    }
    tabs.addEventListener('click', tabActive);
    tabActive();

document.addEventListener('DOMContentLoaded', tabActive);

