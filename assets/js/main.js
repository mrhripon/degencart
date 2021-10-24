(function ($) {
  "use strict";



  $(document).ready(function() {

      // Query for Preloader 
      setTimeout(function(){
        $("#preloader").addClass('start-split');
      }, 1800);
      $("#preloader .preloader-content").delay(1500).fadeOut("slow");

      setTimeout(function(){
        $("#preloader").css('display', 'none');
        $("body").removeClass('fix');
      }, 2300);



      // Query For Mobile Menu Activation 
      $('.toggle-bar').on('click', function () {
          $('.mobile-menu-wrapper, .overlay').addClass('show');
      })
      $('.close-mobile-menu, .overlay , .mobile-menu a').on('click', function () {
          $('.mobile-menu-wrapper, .overlay').removeClass('show');
      })


    // Query For Header Sticky 
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
          $('header').addClass("sticky");
        }
        else{
          $('header').removeClass("sticky");
        }
      });

    // Activation For One page Nave 
    $('#nav').onePageNav();


    // Action Aos Jquery Plugins 
    AOS.init({
      disable:'phone',
      duration: 1000
    });



    //   Query For scroll back to top 
    var back = $('.back-to-top');
    back.on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 900);
    })
    $(window).on('scroll', function () {
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();
        if (top > height) {
            back.addClass('visible');
        } else {
            back.removeClass('visible');
        }
      })
         
    });



     
})(jQuery); // End line