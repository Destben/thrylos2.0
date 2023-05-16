

$(document).ready(function() {
    var slideshow = $('.slideshow');
    var slides = slideshow.find('img');
    var slideCount = slides.length;
    var dotContainer = $('.dots-container');
    var dots = [];
  
    // create dots and add them to the container
    for (var i = 0; i < slideCount; i++) {
      var dot = $('<span>').addClass('dot').data('index', i);
      dots.push(dot);
      dotContainer.append(dot);
    }
  
    // hide all slides except the first one
    slides.hide().eq(0).show();
  
    // set the current index to 0
    var currentIndex = 0;
  
    // activate the first dot
    dots[0].addClass('active');
  
    // set the slide interval to 3 seconds
    var interval = setInterval(function() {
      // calculate the next slide index
      var nextIndex = (currentIndex + 1) % slideCount;
  
      // slide the images to the left
      slideshow.animate({ left: '-=100%' }, 1000, function() {
        // hide the current slide and show the next one
        slides.eq(currentIndex).hide();
        slides.eq(nextIndex).show();
  
        // move the slideshow back to its original position
        slideshow.css('left', 0);
  
        // activate the corresponding dot
        dots[currentIndex].removeClass('active');
        dots[nextIndex].addClass('active');
  
        // update the current index
        currentIndex = nextIndex;
      });
    }, 3000);
  
    // handle dot clicks
    dotContainer.on('click', '.dot', function() {
      var clickedIndex = $(this).data('index');
  
      if (clickedIndex !== currentIndex) {
        // slide to the clicked image
        slideshow.animate({ left: -(clickedIndex * 100) + '%' }, 1000, function() {
          // hide the current slide and show the clicked one
          slides.eq(currentIndex).hide();
          slides.eq(clickedIndex).show();
  
          // move the slideshow back to its original position
          slideshow.css('left', 0);
  
          // activate the corresponding dot
          dots[currentIndex].removeClass('active');
          dots[clickedIndex].addClass('active');

          // update the current index
          currentIndex = clickedIndex;
        });
      }
    });
  });
  
  
  
  