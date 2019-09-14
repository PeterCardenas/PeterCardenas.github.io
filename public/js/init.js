/* eslint-disable no-undef */
/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px"
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".smoothscroll").on("click", function(e) {
    e.preventDefault();
    // let id = e.target.id;
    let target = this.hash, $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function() {
          window.location.hash = target;
        }
    );
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function() {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation,
        Highlight the current section in the navigation bar
------------------------------------------------------*/

  let currentSection = "home";

  $(window).on("scroll", function() {
    let headerHeight = $("header").height();
    let y = $(window).scrollTop();
    let nav = $("#nav-wrap");

    if (y > headerHeight * 0.2 && y < headerHeight * .6 && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < headerHeight * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }

    let navigationLinks = $("#nav-wrap a");

    let headerLink = $('#nav-wrap a#homeLink');
    let aboutLink = $('#nav-wrap a#aboutLink');
    let resumeLink = $('#nav-wrap a#resumeLink');
    let portfolioLink = $('#nav-wrap a#portfolioLink');
    let contactLink = $('#nav-wrap a#contactLink');

    let aboutLocation = $("#about").height() + headerHeight;
    let resumeLocation = $("#resume").height() + aboutLocation;
    let portfolioLocation = $("#portfolio").height() + resumeLocation;
    let contactLocation = $("#contact").height() + portfolioLocation;

    if (currentSection !== "home" && y < headerHeight) {
      navigationLinks.parent().removeClass("current");
      headerLink.parent().addClass("current");
      currentSection = "home";
    } else if (currentSection !== "about" && y < aboutLocation && y > headerHeight) {
      navigationLinks.parent().removeClass("current");
      aboutLink.parent().addClass("current");
      currentSection = "about";
    } else if (currentSection !== "resume" && y < resumeLocation && y > aboutLocation) {
      navigationLinks.parent().removeClass("current");
      resumeLink.parent().addClass("current");
      currentSection = "resume";
    } else if (currentSection !== "portfolio" && y < portfolioLocation && y > resumeLocation) {
      navigationLinks.parent().removeClass("current");
      portfolioLink.parent().addClass("current");
      currentSection = "portfolio";
    } else if (currentSection !== "contact" && y < contactLocation && y > portfolioLocation) {
      navigationLinks.parent().removeClass("current");
      contactLink.parent().addClass("current");
      currentSection = "contact";
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade"
  });

  $(document).on("click", ".popup-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  $(document).on("click", ".popup-modal .close", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false
  });

});
