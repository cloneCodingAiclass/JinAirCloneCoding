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

    $('.old_booking_list').hide();
    $(".now_booking").on('click', function () {
        $(".old_booking_list").css("display","none");
        $(".old_booking").css("background-color", "white");
        $(".old_booking").css("color", "#444");
        $(".now_booking").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".booking_list").css("display","block");
    })
    $(".old_booking").on('click', function () {
        $(".booking_list").css("display","none");
        $(".now_booking").css("background-color", "white");
        $(".now_booking").css("color", "#444");
        $(".old_booking").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".old_booking_list").css("display","block");
    })
    $('.pwcheck_modal').hide();
    $('.edit').click(function(){
        $('.pwcheck_modal').fadeIn(200);
        
        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);
            e.stopPropagation();
        });
    });
    $(window).scroll(function() {
        if($(this).scrollTop() > 90) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0px");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "90px");
            $("#header").css("position", "absolute");
        }
    });
});
