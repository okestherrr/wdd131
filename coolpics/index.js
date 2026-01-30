//modal image display

const gallery = document.querySelector('.currentwork');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
gallery.addEventListener('click', openModal);
function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    
    if (src) {
        modalImage.setAttribute('src', src);
        modalImage.setAttribute('alt', alt || '');
        modal.showModal();
    }
}
closeButton.addEventListener('click', () => {
    modal.close();
});
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});