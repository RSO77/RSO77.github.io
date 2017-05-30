$(document).ready(function() {

    var test = $(window).width();
    console.log(test);
    if ( test > 768){
        $('.menu-drop').click(function(){
            $("div[class^='drop-1']").toggle("slow")
        });
    }
    else{}



    $('.owl-carousel1').owlCarousel({
        center: true,
        nav:true,
        items:1,
        loop:true,
        //animateOut: 'fadeOut',
        margin:10,
        merge:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

    $('.owl-carousel2').owlCarousel({
        nav:true,
        items:1,
        loop:true,
        margin:0,
        merge:true,
       // autoplay:true,
       // autoplayTimeout:5000,
       // autoplayHoverPause:true,
        responsive:{
            992:{
                items:2
            }
        }
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

    $('.owl-carousel3').owlCarousel({
        nav:true,
        items:6,
        loop:true,
        margin:20,
        merge:true,
       // autoplay:true,
       // autoplayTimeout:5000,
       // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            992:{
                items:6
            },
            767:{items:5},
            580:{items:4},
            470:{items:3},
            370:{items:2},
            0:{items:1}
        }
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

    $('.owl-carousel4').owlCarousel({
        nav:true,
        items:4,
        loop:true,
        margin:20,
        merge:true,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            540:{items:2},
            767:{items:3},
            992:{items:4}
        }
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

    $('.owl-carousel5').owlCarousel({
        nav:true,
        items:4,
        loop:true,
        margin:20,
        merge:true,
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            992:{
                items:4
            },
            767:{items:3},
            580:{items:2},
            470:{items:1},
            0:{items:1}
        }
    });
    $('.owl-next').html("");
    $('.owl-prev').html("");

    $('label').click(function ( e ) {
        if($(this).find('.checkbox').prop('checked')) {
            $(this).addClass("active")
        } else {
            $(this).removeClass("active")
        }
    })

    $('.my-grayscale').gray();
});







