
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white"; 
        logo.src = "byui-logo-white.png";  
     } else if (current == 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        logo.src = "byui-logo-blue.webp";
     } else {
        document.body.style.backgroundImage = "none";
        logo.src = "byui-logo-blue.webp";
    }
}           
                    