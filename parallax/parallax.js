let text = document.getElementById("text");
let sky = document.getElementById("sky");
let mountain = document.getElementById("mountain");
let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.top = 50 + value * -0.5 + "%";
  btn.style.marginTop = value * 0.2 + "px";
  mountain.style.top = value * -1.5 + "px";
  sky.style.top = value * -0.5 + "px";
});

//Scroll to top button

window.addEventListener("scroll", function () {
  var scrollTopBtn = document.querySelector(".scrollTop");
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
