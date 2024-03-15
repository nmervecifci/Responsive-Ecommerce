
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('goToTopButton');
    if (document.documentElement.scrollTop > 300) { 
        scrollToTopButton.style.display = 'block'; 
    } else {
        scrollToTopButton.style.display = 'none'; 
    }
});

document.getElementById('goToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
