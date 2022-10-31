const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')


const content = document.querySelector('.wrapper')
const circle = document.querySelector('.circle')

openBtn.addEventListener('click', () => {
    content.classList.add('show-nav')
    circle.classList.add('rotate-circle')
})

closeBtn.addEventListener('click', () => {
    content.classList.remove('show-nav')
    circle.classList.remove('rotate-circle')
})