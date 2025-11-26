const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');

burger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

document.getElementById('go1').addEventListener('click', function() {
    window.location.href = '../Pages/CoursePage/course.html';
});

document.getElementById('go2').addEventListener('click', function() {
    window.location.href = '../Pages/NewsPage/news.html';
});