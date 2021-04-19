
$(document).ready(function(){
    var slideIndex = 0;
    showSlides();
    
    // Next/previous controls
    window.plusSlides = function plusSlides(n) {
        showSlides(slideIndex += n, "plus");
    }
    
    // Thumbnail image controls
    window.currentSlide = function currentSlide(n) {
        showSlides(slideIndex = n, "cur");
    }

    function showSlides(n, type) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      if(!type){
        setTimeout(showSlides, 5000); // Change image every 2 seconds
      }
    }
});