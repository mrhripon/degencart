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




    // Query for countdown timer
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      
      var deadline = new Date(Date.parse(new Date()) + 360 * 24 * 60 * 60 * 1000);
      initializeClock('clockdiv', deadline);




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