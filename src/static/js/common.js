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


});
