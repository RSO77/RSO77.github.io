$(document).ready(function() {
    $('.sl_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl_2'
    });
    $('.sl_2').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sl_1',
        focusOnSelect: true

    });
});







