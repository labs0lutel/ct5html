const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const clone = thumbnail.cloneNode(true); 
        modalContent.innerHTML = ''; 
        modalContent.appendChild(clone);
        modal.style.display = 'flex'; 
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});