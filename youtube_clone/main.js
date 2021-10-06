const moreBtn = document.querySelector('.title .title__text .moreBtn');
const title = document.querySelector('.title .title__text .title__text__main');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})