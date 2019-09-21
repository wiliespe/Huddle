let burgerMenu = document.getElementById('burgerMenu');
let MainMenu = document.getElementById('mainMenu')
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("close")
    MainMenu.classList.toggle("active")
})



