$(document).ready(function() {
    $("#accordion").accordion();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $(".scroll-btn").fadeIn();
        } else {
            $(".scroll-btn").fadeOut();
        }
    })

    $(".scroll-btn").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })

    $(".menu-search").click(function() {
        $(".overlay-wrapper-search").css({
            "display": "block",
        })
    })

    $(".search-icon").click(function() {
        $(".overlay-wrapper-search").css({
            "display": "none",
        })
    })

    $("#menu-toggler").click(function() {
        $(".overlay-wrapper-menu").css({
            "display": "block",
        })
    })

    $(".phone-menu-icon").click(function() {
        $(".overlay-wrapper-menu").css({
            "display": "none",
        })
    })

    $(".down-btn").click(function(ev) {
        ev.target.parentElement.parentElement.querySelector(".phone-sub-menu").classList.toggle('on')

    })
})