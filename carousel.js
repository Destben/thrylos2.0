var slideshow = document.querySelector('.slideshow')
var slides = slideshow.children;
var slides_max = slides.length;
var slides_selection = 0;
var slide_change_interval = window.setInterval(change_slides, 3000)

function change_slides() {
    console.log(slides_selection)
    slideshow.scrollTo(slides[slides_selection])
    if (slides_selection + 1 < slides_max) {
        slides_selection += 1
    } else {
        slides_selection = 0
    }
    console.log(slides[slides_selection])
}


console.log(slides[0])