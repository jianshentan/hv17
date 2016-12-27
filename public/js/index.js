/* global $*/

/* Scroll paths */
$(document).ready(function() {
  
  // set the unit of a slide
  var slideHeight = $(window).height();
  
  // set height of page to vh * number of slides
  var numSlides = $(".slide:last").data("position") + 1;
  $("body").height(slideHeight * numSlides);
  
  // initialize scroll index
  var currScrollIndex = Math.floor($(window).scrollTop() / slideHeight);
     
  // activate the data-bg-color and data-color settings on each slide 
  var slide = $('.slide[data-position="'+currScrollIndex+'"]');
  slide.find(".slide-container").css({ "background-color": slide.data("bg-color") });
  slide.css({ "color": slide.data("color") });
  
  $(window).scroll(function() {

    // set scroll position
    var scrollPos = $(window).scrollTop();
    
    // set slide-title for each slide
    $(".title").each(function() {
      var title = $(this);
      var i = title.data("position");
      title.css({
        'margin-top': (i * slideHeight) - scrollPos
      });
    });
    
    // set slide-direction method for each slide
    $(".slide").each(function() {
      var slide = $(this);  
      var i = slide.data("position");
       
      // set background color
      var slideBgColor = slide.data("bg-color");
      slide.find(".slide-container").css({ "background-color": slideBgColor });
      
      // set text color on slide
      var slideColor = slide.data("color");
      slide.css({ "color": slideColor });     
      
      switch (true) {
        case slide.hasClass("diagonal-right"):
          slide.css({
            'margin-left': (i * slideHeight) - scrollPos,
            'margin-top': (i * slideHeight) - scrollPos
          }); 
          break;
        case slide.hasClass("diagonal-left"):
          slide.css({
            'margin-left': - (i * slideHeight) + scrollPos,
            'margin-top': (i * slideHeight) - scrollPos
          }); 
          break;
        case slide.hasClass("vertical"):
          slide.css({
            'margin-top': (i * slideHeight) - scrollPos
          });          
          break;
        case slide.hasClass("horizontal-right"):
          slide.css({
            'margin-left': (i * slideHeight) - scrollPos
          });    
          break;
        case slide.hasClass("horizontal-left"):
          slide.css({
            'margin-left': - (i * slideHeight) + scrollPos
          });          
          break;
      }
    });
    
    var newScrollIndex = Math.floor((.5 * slideHeight + scrollPos)/slideHeight);
    // var newScrollIndex = Math.floor(scrollPos/slideHeight) + 1;
   
    if (currScrollIndex != newScrollIndex) {
      // get prev slide based on scrollIndex
      var prevSlide = $('.slide[data-position="'+currScrollIndex+'"]');
      var prevTitle = $('.title[data-position="'+currScrollIndex+'"]');
     
      // get current slide based on scrollIndex
      var currSlide = $('.slide[data-position="'+newScrollIndex+'"]');
      var currTitle = $('.title[data-position="'+newScrollIndex+'"]');

      
      // set title color 
      var titleColor = currTitle.data("color");
      currTitle.css({ "color": titleColor });
      
      // set title background color 
      var titleBgColor = currTitle.data("bg-color");
      currTitle.find(".title-container").css({ "background-color": titleBgColor });
      
      /*
      // make previous slide's content disappear as next content enters
      prevSlide.find(".slide-container").fadeOut();
      currSlide.find(".slide-container").fadeIn(); 
      */
                
      // update currScrollIndex
      currScrollIndex = newScrollIndex;
    }

  }); 
  
  // start the page by scrolling 1 pixel. This will kick off all the positioning set above
  $('body, html').animate({
    scrollTop: 1
  }, 1);
  
});
   
function scrollToSlide(slideIndex) {
  $('body, html').animate({
    scrollTop: slideIndex * $(window).height()
  }, 1000);
}

