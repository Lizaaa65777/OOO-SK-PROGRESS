$(function(){

    $('.slider__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 841,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1
          }
        },
      ]
    });
  
    wow = new WOW(
      {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
      }
    )
    wow.init();
  
  
  });



  