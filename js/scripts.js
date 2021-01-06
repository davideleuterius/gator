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


const activeImage = document.querySelector(".current-image .active");
const allImages = document.querySelectorAll(".image-list img");

function changeImage(e) {
  activeImage.src = e.target.src;
}

allImages.forEach(image => image.addEventListener("click", changeImage));
