
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";   
     } else if (current == 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        logo.src = "byui-logo-blue.webp";
     } else {
        // code for changes to colors and logo
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        logo.src = "byui-logo-blue.webp";
    }
}           
                    