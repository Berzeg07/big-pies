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


});
