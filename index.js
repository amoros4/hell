const nav = document.querySelector(".navbar");
window.addEventListener('scroll', function() {
    if (window.scrollY) {
        nav.style.backgroundColor = "coral";
        nav.style.transition = "1.5s";
        
    } else {
        nav.style.backgroundColor = "transparent";
    }
} )