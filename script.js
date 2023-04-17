const modalMenu = document.querySelector('.modal_menu');
const burguerButton = document.querySelector('.burguer');
const links = document.querySelectorAll('a');

function handleClick() {
  modalMenu.classList.toggle('active');
}

function PreventLinks(event) {
  event.preventDefault();
}


burguerButton.addEventListener('click', handleClick);
links.forEach((link) => {
  link.addEventListener('click', PreventLinks);
})
