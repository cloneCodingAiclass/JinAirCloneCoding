'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })

});

// trip-layer
$(() => {
    $(".trip_select_opt").on("click", function (e) {
        e.stopPropagation();
        $(".trip_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".trip_down_img").css({ "display": "none" });
        $(".trip_up_img").css({ "display": "inline-block" });
        $(".trip_pop_layer").slideDown("fast");
    })
    $(".trip_down_img").on("click", function (e) {
        e.stopPropagation();
        $(".trip_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".trip_down_img").css({ "display": "none" });
        $(".trip_up_img").css({ "display": "inline-block" });
        $(".trip_pop_layer").slideDown("fast");
    })
    $(".trip_up_img").on("click", function (e) {
        e.stopPropagation();
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
    })
    $(".trip_type1").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type1").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
    })
    $(".trip_type2").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type2").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
    })
    $(".trip_type3").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type3").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
    })
    $("#container").on('click', function (e) {
        e.stopPropagation();
        $(".trip_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".trip_down_img").css({"display" : "inline-block"});
        $(".trip_up_img").css({"display" : "none"});
        $('.trip_pop_layer').slideUp(50);
    })
})

// person-layer
$(() => {
    $(".person_select_opt").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".person_down_img").css({ "display": "none" });
        $(".person_up_img").css({ "display": "inline-block" });
        $(".person_pop_layer").slideDown("fast");
    })
    $(".person_down_img").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".person_down_img").css({ "display": "none" });
        $(".person_up_img").css({ "display": "inline-block" });
        $(".person_pop_layer").slideDown("fast");
    })
    $(".person_up_img").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })
    $(".person_type1").on("click", function (e) {
        e.stopPropagation();
        const text = $(".person_type1").text();
        $(".person_select_opt").text(text);
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })
    $(".person_type2").on("click", function (e) {
        e.stopPropagation();
        const text = $(".person_type2").text();
        $(".person_select_opt").text(text);
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })
    $(".person_type3").on("click", function (e) {
        e.stopPropagation();
        const text = $(".person_type3").text();
        $(".person_select_opt").text(text);
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })
    $("#container").on('click', function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".person_down_img").css({"display" : "inline-block"});
        $(".person_up_img").css({"display" : "none"});
        $('.person_pop_layer').slideUp(50);
    })
})

$(() => {
    let thisSlide, autoPlayBtn, autoPlayState;
    let swiper = new Swiper(".mySwiper", {
        cssMode: true,
        observer: true,
        observeParents: true,
        loop: true,
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        on: {
            init: function () {
                thisSlide = this;
                autoPlayBtn = document.querySelector('.wrap-autoplay-control button');
                autoPlayBtn.addEventListener('click', (e) => {
                    autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                    if (autoPlayState === 'false') {
                        autoPlayBtn.setAttribute('aria-pressed', 'true');
                        thisSlide.autoplay.stop();
                    } else if (autoPlayState === 'true') {
                        autoPlayBtn.setAttribute('aria-pressed', 'false');
                        thisSlide.autoplay.start();
                    };
                });
            },
        },    
    });
});