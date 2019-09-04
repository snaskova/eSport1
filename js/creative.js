

  // accordion
  $('.toggle').click(function(e) {
    	e.preventDefault();

      var toggle = $(this);

      if (toggle.next().hasClass('show')) {
          toggle.next().removeClass('show');
          toggle.next().slideUp(350);
          toggle.removeClass('active');
      } else {
          toggle.parent().parent().find('.inner').removeClass('show');
          // toggle.next().slideUp(350);
          toggle.next().toggleClass('show');
          toggle.next().slideToggle(350);
          toggle.addClass('active');
      }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 250, 'easeOutSine');
      event.preventDefault();
  });


    // back to top button
    $(document).ready(function() {
      var offset = 550;
      var duration = 300;

      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
      } else {
      $('.back-to-top').fadeOut(duration);
      }

    });

    $('.back-to-top').click(function(event) {
    event.preventDefault();

      $('html, body').animate({scrollTop: 0}, duration);
      return false;
    })


    //  scrollreveal
    // ScrollReveal().reveal('.header-content', {delay: 500});
    ScrollReveal().reveal('.package-container');
    ScrollReveal().reveal('.popup');

    });

    $(function(){
      var toggle = $('#toggle');

      $('#menu a').on('click', function(){
        console.log()
      if($(window).width() < 790){
                $('#toggle').click();
      }

      });

      toggle.on('click', function(){
        $(this).toggleClass('is-active');

        $("#menu").addClass('flex');
        $('#menu').toggleClass('slideInDown slideOutUp');
        $('body').toggleClass('overflow');
      })
    })

// cookie set

jQuery(document).ready(function($) {
  //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
  if( getCookie('popupCookie') != 'submited'){
    if(getCookie('popupCookie') != 'closed' ){
      $('.cookie-popup').addClass('active');
    }
  }

  $('#cookie-accept').click(function(){
    $('.cookie-popup').removeClass('active');
    //sets the coookie to five minutes if the popup is submited (whole numbers = days)
    setCookie( 'popupCookie', 'submited', 30 );
  });

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // var expires = "expires=" + d.toUTCString();
    var expires = "expires=" + 0;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  setTimeout(function(){
    $('.cookie-popup').removeClass('active');
  }, 10000);


  if($(window).width() <= 600){
  $('#mobile-link').attr("href","https://m.sport1.de/unternehmen/esportsapp");
  }
});
