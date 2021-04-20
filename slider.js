
$(document).ready(function(){
    var slideIndex = 0;
    var charSlideIndex = 1;

    showSlides();

    setInterval(showSlides, 5000);

    // Next/previous controls
    window.plusSlides = function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    window.currentSlide = function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName('mySlides');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      if(slideIndex == -1){
        slideIndex = slides.length - 1;
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
    }

});