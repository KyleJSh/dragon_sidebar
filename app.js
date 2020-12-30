const dragonToggle = document.querySelector('.dragon-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

dragonToggle.addEventListener('click', function () {
  sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sideBar.classList.remove('show-sidebar');
});