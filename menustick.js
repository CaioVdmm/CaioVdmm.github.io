// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // Get the navbar
    var navbar = document.getElementById('nav');

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    
    if (window.pageYOffset > sticky) {
	navbar.classList.add("fixar")
    } else {
	navbar.classList.remove("fixar");
    }
} 
