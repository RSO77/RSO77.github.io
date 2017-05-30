$(document).ready(function() {
    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:2
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        center: true,
        nav:true,
        items:1,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            992:{
                items:2
            }
        }
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

});







