// burger ON / OFF

const body = document.querySelector('.body');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__hidden_menu');


burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger-active');

  let headerHeight = document.querySelector('.header').clientHeight;
  let heroHeight = document.querySelector('.section_hero__container').clientHeight;
  let paddingOffset = window.innerWidth - body.offsetWidth + 'px';
  let actualHeight = headerHeight + heroHeight + 'px';

  menu.style.height = actualHeight;
  menu.classList.toggle('menu-active');
  body.classList.toggle('noscroll');
  body.classList.toggle('padding_reset');
  body.style.paddingRight = paddingOffset;
});
