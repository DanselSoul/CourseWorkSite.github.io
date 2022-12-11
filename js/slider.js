
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.opacity = 0;
    }
    slides[slideIndex - 1].style.opacity = 1;
}
var area1 = document.getElementById("slides");
var area2 = document.getElementById("next");
var area3 = document.getElementById("prev");
var changer = setInterval(nextSlide, 8000);
area1.onmouseover = function(){
    clearTimeout(changer);
}
area2.onmouseover = function(){
    clearTimeout(changer);
}
area3.onmouseover = function(){
    clearTimeout(changer);
}
area1.onmouseout = function(){
    changer = setInterval(nextSlide, 8000);
}
