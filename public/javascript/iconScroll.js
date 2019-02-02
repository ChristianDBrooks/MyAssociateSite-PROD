const scrollPointStart = document.getElementById('scroll-start');
const scrollBtnStart = document.getElementById('scroll-btn-start');
const scrollPointEnd = document.getElementById('scroll-end');
const scrollBtnEnd = document.getElementById('scroll-btn-end');

scrollBtnStart.addEventListener("click", function () {
  scrollPointStart.scrollIntoView({
    behavior: "smooth"
  });
})

scrollBtnEnd.addEventListener("click", function () {
  scrollPointEnd.scrollIntoView({
    behavior: "smooth"
  });
})