var hamburguerMenu = document.querySelector('.menu-icon');
var searchIcon = document.querySelector('.search-icon');
var panel = document.querySelector('.panel');
var openMenu = document.querySelector('.open-menu');
var searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function(event) {
  event.preventDefault();
  toggleAnimation('.search-input', 'active');
  toggleAnimation('.menu-icon', 'hidden'); 
});

hamburguerMenu.addEventListener('click', function(event) {
  event.preventDefault();
  toggleAnimation('.panel', 'show-menu');
  toggleAnimation('.open-menu', 'active');
});

function toggleAnimation(el, className) {
  var element = document.querySelector(el);
  if (!element) {
    return;
  }

  element.classList.toggle(className);
}
