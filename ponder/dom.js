let title = document.querySelector('h1');
console.log(title);

// changes the h1 through javaScript
title.textContent ='Web Page Components';

document.getElementById('topics').style.color = 'red';

// ###############if u have the same name of the id then it will only select the 1st one it finds


// ###########THIS IS ANOTHER WAY TO SELECT AN ELEMENT BY ID
// let topic_title = document.getElementById('topics');
// topic_title.style.color = 'purple';


let list = document.querySelector('.list');

// ###### you need the size of it, type of it, and the color
list.style.border = '3px solid black';

let paragraph = document.querySelector('p');

paragraph.classList.add('background');

//change the body to black to make the page be changed color

//this is another way to change the paragraph background color
//paragraph.style.backgroundColor = '#000';

// to change the image

let image = document.querySelector('img');

image.setAttribute('src', 'images/logo.png');

// ## another way to change the image
// image.src = 'images/logo.png';


// drop down menu
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'red';
})

const newPara = document.createElement('p');
newPara.innerText = 'Added with JavaScript';
document.body.appendChild(newPara);