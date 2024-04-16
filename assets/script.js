// Set the duration for your transitions
const transitionDuration = '0.5s';

let mobilePages = document.querySelector(".mobile-pages");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

var about = document.querySelector(".nav-icon");
let openabout = about.querySelector("#open");
let closeabout = about.querySelector("#close");

var width = document.querySelector("#width");
var navmargin = document.querySelector(".nav-dekstop");

let navopen = document.querySelector("#op");
let navclose = document.querySelector("#cl");
let active = document.querySelector(".active");
let customNav = document.querySelector("#custom-nav");

let left = document.querySelector(".arrow-left");
let right = document.querySelector(".arrow-right");

let girlimg = document.querySelector("#girl-image");
let content = document.querySelector("#content");
let carimg = document.querySelector("#car-image");

let girlimgb = document.querySelector("#girl-image-2");
let contentb = document.querySelector("#content-2");
let carimgb = document.querySelector("#car-image-2");

let girlimgc = document.querySelector("#girl-image-3");
let contentc = document.querySelector("#content-3");
let carimgc = document.querySelector("#car-image-3");

let logo = document.getElementById("logo");
let logomobile = document.getElementById("logomobile");
var aboutNavColor = document.querySelectorAll('#about-nav-color');
var abouticon = document.querySelectorAll('#about-icon');
var searchicon = document.querySelector('#search-icon-id');
var searchbar = document.querySelector('#search-bar');


function slidemove(direction) {
    let slides = document.getElementById('slides').children;
    let currentIndex = 0;

    // Find the current visible slide
    for (let index = 0; index < slides.length; index++) {
        if (!slides[index].classList.contains('d-none')) {
            currentIndex = index;
            break;
        }
    }

    // Hide the current slide
    slides[currentIndex].classList.add('d-none');

    // Calculate the next index based on the direction
    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % slides.length;
    } else {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    // Show the next slide
    slides[currentIndex].classList.remove('d-none');
}


open.addEventListener("click", function () {

    open.style.opacity = "0",
        open.style.display = "none",
        close.style.opacity = "1",
        close.style.display = "block",
        mobilePages.style.marginLeft = "0",
        body.style.height = "100%",
        body.style.overflowY = "hidden"

})

close.addEventListener("click", function () {

    close.style.opacity = "0",
        close.style.display = "none",
        open.style.opacity = "1",
        open.style.display = "block",
        mobilePages.style.marginLeft = "100%"

})


// Set up transitions
function setUpTransitions() {
    const elementsToTransition = [active, width, navmargin, logo, searchicon, searchbar, openabout, closeabout];
    
    elementsToTransition.forEach(element => {
        element.style.transition = `all ${transitionDuration}`;
    });

    aboutNavColor.forEach(function (element) {
        element.style.transition = `color ${transitionDuration}`;
    });
}


function addBoxShadowOnScroll() {

    if (window.scrollY > 0) {

        active.style.backgroundColor = 'rgb(0 0 0 / 80%)';
        width.style.width = "10%";
        width.style.padding = "3px";
        navmargin.style.margin = "0";
        navmargin.style.paddingTop = "5px";
        logo.src = "./assets/images/1x/logo-header.png";
        logomobile.src = "./assets/images/1x/logo-header.png";
        searchicon.style.color = "#fff";
        searchbar.style.borderColor = "#fff";
        openabout.style.color = "#FFF";
        closeabout.style.color = "#FFF";

        aboutNavColor.forEach(function (element) {
            element.style.transition = `color ${transitionDuration}`;
            element.style.color = "#fff";
        });


    } else {
        active.style.backgroundColor = '#00000000';
        width.style.width = "14%";
        width.style.padding = "8px";
        navmargin.style.marginTop = "-25px";
        navmargin.style.margin = "5px";
        logo.src = "./assets/images/1x/1x/black-navbar-logo.png";
        logomobile.src = "./assets/images/1x/1x/black-navbar-logo.png";
        searchicon.style.color = "#000";
        searchbar.style.borderColor = "#000";
        openabout.style.color = "#000";
        closeabout.style.color = "#000";

        aboutNavColor.forEach(function (element) {
            element.style.transition = `color ${transitionDuration}`;
            element.style.color = "#000";
        });

    }
}


// Event listener for scroll
window.addEventListener('scroll', addBoxShadowOnScroll);

// Set up transitions on page load
window.addEventListener('load', setUpTransitions);

// ... (other event listeners)
window.addEventListener('scroll', addBoxShadowOnScroll);