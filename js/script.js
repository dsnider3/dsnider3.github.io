// JS to target CSS variable --yellow and change to new color using the DOM
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);


root.style.setProperty('--yellow', 'orange');



/* ------------ Nav Menu Visibility Behavior ------------ */


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-250px";
//   }
//   prevScrollpos = currentScrollPos;
// }


/* ------------ Hamburger Animation ------------ */

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
});


/* ------------ Viewport Animation Fix Chrome for Android ------------ */


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

