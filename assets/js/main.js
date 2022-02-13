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
