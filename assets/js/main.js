$(document).ready(function () {
  $(".owl-carusel-store").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel-cream").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Side bar Click Event
  $(".fa-plus").click(function(){
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
    $(this).parent().parent().next().toggleClass("d-block");
    if($(".product-category").css("height")>"232px"){
      $(".product-category").css("overflow-y","scroll");
    }else{
      $(".product-category").css("overflow-y","auto")
    }
  })

  $(".sort-shop").click(function(){
    $(this).parent().next().toggleClass("d-block");
  })
  $(".color-show-shop").click(function(){
    $(this).next().toggleClass("d-block");
  })

  var clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    callbacks: {
      stop: function () {
        $(".message").html("The clock has stopped!");
      },
    },
  });

  // set time
  clock.setTime(220880);

  // countdown mode
  clock.setCountdown(true);

  // start the clock
  clock.start();
});
