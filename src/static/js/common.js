$(document).ready(function () {
    $('.select select').selectric();

    $('.burger').on('click', function () {
        $(this).toggleClass('is-active')
        $('.dropdownmenu').toggleClass('is-active')
    })

    $(document).mouseup(function (e) {
        var div = $(".dropdownmenu");
        if (div.hasClass('is-active')) {
            if (!div.is(e.target) && div.has(e.target).length === 0 && !$('.burger').is(e.target)) {
                div.removeClass('is-active');
                $('.burger').removeClass('is-active')
            }
        }
    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 170) {
                $('.header-sticky').addClass('is-active');
            }
            else {
                $('.header-sticky').removeClass('is-active');
            }
        });
    });

    var productGallery = new Swiper('.product-gallery', {
        slidesPerView: 11,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1279: {
                slidesPerView: 5,
            },
            1365: {
                slidesPerView: 7,
            },
            1599: {
                slidesPerView: 9,
            },
        }
    });

    var bannerGallery = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    var pieSlider = new Swiper('.pie-slider', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
            1279: {
                slidesPerView: 2,
            },
            1599: {
                slidesPerView: 3,
            },
        }
    })

    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 767 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.adv-slider', {
                slidesPerView: 4,
                spaceBetween: 23,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 1,
                    },
                    1279: {
                        slidesPerView: 2,
                    },
                    1599: {
                        slidesPerView: 3,
                    },
                }
            })
        } else if (screenWidth < 768 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function () {
        initSwiper();
    });

    $(".switch-price span").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        }
        else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    var delivSlider = undefined;

    function initSwiperD() {
        var screenWidth = $(window).width();
        if (screenWidth > 767 && delivSlider == undefined) {
            var advSlider = new Swiper('.delivery-slider', {
                slidesPerView: 4,
                spaceBetween: 38,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    767: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    1279: {
                        slidesPerView: 3,
                    },
                    1599: {
                        slidesPerView: 3,
                    },
                }
            });
        } else if (screenWidth < 768 && delivSlider != undefined) {
            delivSlider.destroy();
            delivSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiperD();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function () {
        initSwiperD();
    });

    if (window.matchMedia('(max-width: 991px)').matches) {
        $('#productSlider').lightSlider({
            gallery: false,
            item: 1,
            vertical: false,
            // adaptiveHeight: true,
            // verticalHeight: 196,
            slideMargin: 5
        });
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('#productSlider').lightSlider({
            gallery: true,
            item: 1,
            vertical: true,
            adaptiveHeight: true,
            loop: true,
            verticalHeight: 356,
            vThumbWidth: 129,
            thumbItem: 4,
            thumbMargin: 4,
            slideMargin: 0
        });
    }


});
