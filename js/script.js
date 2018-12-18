$(window).scroll(function () {
    var the_top = $(document).scrollTop();
    if (the_top > 100) {
        $('#navbar').addClass('navbar-sticky');
    } else {
        $('#navbar').removeClass('navbar-sticky');
    }
});

$(window).resize(function () {
    if ($(window).width() < 786) {
        $(window).scroll(function () {
            var the_top = $(document).scrollTop();
            if (the_top > 90) {
                $('.menu').slideUp();
            } 
        });
    }
})

$(window).resize(function () {
    if ($(window).width() > 786) {
        $(".menu").removeAttr("style");
    }
})

$('.btn-bars').click(function () {
    $('.menu').slideToggle();
});

$('.dropdown').click(function () {
    $('.dropdown-menu').slideToggle();
});

$('.footer-dropdown').click(function () {
    $('.footer-dropdown-menu').slideToggle();
})


$(function () {
    $('.tab-item').not(':first').hide();
    $('.tab').click(function () {
        $('.tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn();
    });
})

$('#btn-order').click(function() {
    $('.order-modal').toggleClass('active');
})
$('.btn-buy').click(function() {
    $('.order-modal').toggleClass('active');
})

$('.order-modal-bg').click(function() {
    $('.order-modal').toggleClass('active');
})

$('.order-modal-close').click(function() {
    $('.order-modal').toggleClass('active');
})

// $('.hero').parallax({
//     imageSrc: 'images/hero.jpg',
//     androidFix: true,
//     iosFix: true,
//     zIndex: 1,
//     naturalHeight: 500

// });