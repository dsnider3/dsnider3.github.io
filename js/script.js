// JS to target CSS variable --yellow and change to new color using the DOM
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);


root.style.setProperty('--yellow', 'orange');





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
//     document.getElementById("header").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// }

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
