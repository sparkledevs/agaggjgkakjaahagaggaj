(function ($) {
  "use strict";

  //Parallax

  function scrollBanner() {
    $(document).on("scroll", function () {
      var scrollPos = $(this).scrollTop();
      $(".parallax-fade-top").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 700
      });
      $(".parallax-00").css({
        top: scrollPos / -3.5 + "px"
      });
      $(".parallax-01").css({
        top: scrollPos / -2.8 + "px"
      });
      $(".parallax-top-shadow").css({
        top: scrollPos / -2 + "px"
      });
    });
  }
  scrollBanner();

  //Page cursors

  console.log( document.getElementsByTagName("body"))

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  //Navigation

  var app = (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();

  $(document).ready(function () {
	  var music = document.getElementById("hover-audio");

    $("li.nav__list-item a").hover(function () {
      $(this).after(function() {
        music.play();
        music.volume = 0.2;
      });
    });

  });

  //Scroll back to top

   $(document).ready(function () {
     var offset = 300;
     var duration = 400;
     jQuery(window).on("scroll", function () {
       if (jQuery(this).scrollTop() > offset) {
         jQuery(".scroll-to-top").addClass("active-arrow");
       } else {
         jQuery(".scroll-to-top").removeClass("active-arrow");
       }
     });
     jQuery(".scroll-to-top").on("click", function (event) {
       event.preventDefault();
       jQuery("html, body").animate({ scrollTop: 0 }, duration);
       return false;
     });
   });
 })(jQuery);

var $animation_elements = $(".product-row > div");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			// $element.removeClass('in-view');
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

$(".notify").click(function () {
  $(this).fadeOut();
});

