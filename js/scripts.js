'use strict';
var el = document.querySelectorAll('.menu-toggle');

el.forEach((item) => {
  item.addEventListener('click', () => {
    var menuEl = document.getElementById('top-bar');
    var iconEl = document.getElementById('menu-toggle');
    menuEl.classList.toggle('opened');
    iconEl.classList.toggle('opened');
    iconEl.setAttribute('aria-expanded', iconEl.classList.contains('opened'));
  });
});
