(function($) {
    "use strict";
    /* -------------------------------------
               Prealoder
         -------------------------------------- */
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });

    /* -------------------------------------
          Product Quantity
    -------------------------------------- */
    var minVal = 1,
        maxVal = 20;
    $(".increaseQty").on('click', function() {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function() {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function() {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function() {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });


    /* -------------------------------------
          Language Selector
    -------------------------------------- */
   
    $('.shopcart').on('click', function() {
        $('.cart-popup').addClass('open')
    });
    $('.close-popup').on('click', function() {
        $('.cart-popup').removeClass('open')
    });

     $('.mobile-top-bar').on('click', function() {
        $('.header-top-right').addClass('open')
    });
      $('.close-header-top').on('click', function() {
        $('.header-top-right').removeClass('open')
    });
    /* -------------------------------------
          sticky Header
    -------------------------------------- */
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    /*---------------------------------
        Jquery mmenu
    ---------------------------------*/

    $('#menu').mmenu({}, {
        offCanvas: {
            clone: true
        }
    });
    $('#ham-menu').mmenu();

    /*---------------------------------
        Hero Slider 1
    ---------------------------------*/
    $(".hero-slider-v1").owlCarousel({
        items: 1,
        nav: true,
        dot: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow"></i>'],
        margin: 0,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoHeight: true

            },
            768: {
                items: 1,

            }

        }
    });
    /*---------------------------------
        Hero Slider 2
    ---------------------------------*/
    $(".hero-slider-v2").owlCarousel({
        items: 1,
        nav: true,
        dot: true,
        loop: true,
        margin: 0,
        smartSpeed: 1500,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                autoHeight: true

            },
            768: {
                items:1
            }

        }
    });
    /*---------------------------------
            Hero Slider 3
    ---------------------------------*/
    $(".hero-slider-v3").owlCarousel({
        items: 1,
        nav: true,
        dot: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow"></i>'],
        margin: 0,
        smartSpeed: 1500,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    /*---------------------------------
            Product Slider 1
    ---------------------------------*/
    $(".product-slider").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        loop: true,
        autoHeight: true,
        navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
        margin: 0,
        smartSpeed: 1500,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        autoHeight: true
    });

    /*---------------------------------
            Tesimonial Slider 1
    ---------------------------------*/
    $(".testimonial-slider-v1").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        loop: true,
        margin: 10,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                autoHeight: true

            },
            768: {
                items:1
            }

        }
    });
    /*---------------------------------
            Tesimonial Slider 2
    ---------------------------------*/
    $(".testimonial-slider-v2").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        loop: true,
        margin: 0,
        smartSpeed: 1500,
    });
    /*---------------------------------
            Tesimonial Slider 3
    ---------------------------------*/
    $(".testimonial-slider-v3").owlCarousel({
        items: 1,
        nav: true,
        dot: false,
        animateOut: 'fadeOut',
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-next"></i>'],
        loop: true,
        margin: 0,
        smartSpeed: 3500,
    });

    /*---------------------------------
               About image 3
        ---------------------------------*/
    $(".about-img-slider").owlCarousel({
        items: 1,
        dot: false,
        nav: true,
        loop: true,
        navText: ['<span>Prev</span>', '<span>Next</span>'],
        margin: 0,
        smartSpeed: 1500,
    });
    /*---------------------------------
               Promo Slider 
    ---------------------------------*/
    $(".promo-slider-v1").owlCarousel({
        dot: false,
        nav: true,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow"></i>'],
        margin: 0,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 8

            },
            768: {
                items: 2,

            },
            992: {
                items: 2,

            },
            1200: {
                items: 4,

            }
        }
    });

    /*---------------------------------
               Product Slider 1
    ---------------------------------*/
    $(".product-slider-v1").owlCarousel({
        dot: false,
        nav: true,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow"></i>'],
        margin: 30,
        smartSpeed: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10

            },
            768: {
                items: 2,

            },
            992: {
                items: 2,

            },
            1200: {
                items: 3,

            }
        }
    });

    /*---------------------------------
        Single  Product Slider 
    ---------------------------------*/
    // activation carousel plugin
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    // change carousel item height
    // gallery-top
    let productCarouselTopWidth = $('.gallery-top').outerWidth();
    $('.gallery-top').css('height', productCarouselTopWidth);

    // gallery-thumbs
    let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
    $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

    /* ----------------------------------------
           Magnific Popup Video
     ------------------------------------------*/
    $('.video-play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });


    /*-------------------------------------
         nice Selcet
    ----------------------------------*/
    $('select').niceSelect();
    /*-------------------------------------
         Scroll to top
    ----------------------------------*/

    // Show or hide the  button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


})(jQuery);