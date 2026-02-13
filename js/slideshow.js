let SLIDE_INDEX = 1; // track the current slide (1-based index)

/**
 * showSlides(n)
 * - hides ALL slides
 * - removes "active" from ALL dots
 * - shows only the slide at position `SLIDE_INDEX`
 * - highlights the matching dot
 */
function showSlides(n) {
    // grab all slide elements and all dot elements
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    // if n goes past the last slide, wrap around to the first
    if (n > slides.length) {
        SLIDE_INDEX = 1;
    }

    // if n goes before the first slide, wrap around to the last
    if (n < 1) {
        SLIDE_INDEX = slides.length;
    }

    // hide every slide (set display to "none")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // remove the "active" class from every dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // show the current slide (SLIDE_INDEX is 1-based, arrays are 0-based)
    slides[SLIDE_INDEX - 1].style.display = 'block';

    // highlight the matching dot
    dots[SLIDE_INDEX - 1].classList.add('active');
}

/**
 * moveSlide(n)
 * called by the prev/next arrows.
 * pass -1 to go back, +1 to go forward.
 */
function moveSlide(n) {
    SLIDE_INDEX += n;       // move the index forward or backward
    showSlides(SLIDE_INDEX); // update the display
}

/**
 * currentSlide(n)
 * called when a dot is clicked.
 * jumps directly to slide number n.
 */
function currentSlide(n) {
    SLIDE_INDEX = n;         // set the index to the clicked dot's slide
    showSlides(SLIDE_INDEX); // update the display
}

showSlides(SLIDE_INDEX); // initialize the slideshow by showing the first slide