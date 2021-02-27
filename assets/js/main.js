const openMenu = document.querySelector('.menu-open')
const menuMobile = document.querySelector('.menu--mobile')
const closeMenu =document.querySelector('.menu-close')

openMenu.addEventListener('click', addMobileMenu)

closeMenu.addEventListener('click', removeMobileMenu)


function addMobileMenu() {
    menuMobile.classList.add( 'is-active' )
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
}

function removeMobileMenu() {
    menuMobile.classList.remove( 'is-active' )
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
}