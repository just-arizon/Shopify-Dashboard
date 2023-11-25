// Bell Notification
document.querySelector('.bell').addEventListener('click', () => {
        const bellMenu = document.querySelector('.notification__wrapper');
        bellMenu.classList.toggle('show');
    
    });
document.querySelector('.profiler').addEventListener('click', () => {
        const profilerMenu = document.querySelector('.profiler__wrapper');
        profilerMenu.classList.toggle('show');
    
    });



// Function that gets rid of the notification bar

const disableElements = document.querySelectorAll('[data-cancel]');
const enabledElements = document.querySelector('.plan__header');

function removeContent(params) {
    enabledElements.classList.toggle('remove')
}
disableElements.forEach(disableElement => {
    disableElement.addEventListener('click', removeContent)
})