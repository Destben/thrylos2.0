var slideshow = document.querySelector('.slideshow')
var slides = slideshow.children;
var slides_max = slides.length;
var slides_selection = 0;
var slide_change_interval = window.setInterval(change_slides, 5000)

function on_ready() {
    Array.prototype.forEach.call(slideshow.children, child => {
        console.log(child)
        child.style.display = 'none'
        child.classList.add('hide-to-show')
    })
    slides[0].style.display = 'block';
}

function change_slides() {
    slides[slides_selection].style.display = 'none';
    if (slides_selection + 1 < slides_max) {
        slides_selection += 1
        slides[slides_selection].style.display = 'block';
    } else {
        slides_selection = 0;
        slides[0].style.display = 'block'
    }
}

on_ready()
console.log(slides[0])