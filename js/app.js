const cart_content = document.querySelector('.cart-content')
const cart_icon = document.querySelector('.cart-icon-container')
// 
const products_list = document.querySelector('.links .products-list')
const products_link = document.querySelector('.products-link')
// 
const menu_icon = document.querySelector('.menu-icon')
const links = document.querySelector('ul.links')

cart_icon.addEventListener('click', () => {
    cart_content.classList.toggle('is_open')
})
products_link.addEventListener('click', () => {
    products_list.classList.toggle('block')
})
menu_icon.addEventListener('click', () => {
    console.log('work ss')
    links.classList.toggle('is_open')
})