// JS to target CSS variable --yellow and change to new color using the DOM
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);


root.style.setProperty('--yellow', 'orange');





window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}