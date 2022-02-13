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


    $('.dis_B777_200').on('click', function () {
        $('#container').css({"height":"3000px"});
        $('.B777_200ER').css({"display":"block"});
        $(this).find('p').css({"border-bottom": "3px solid rgb(102, 30, 67)"});
        $('.dis_B737_800').find('p').css({"border-bottom":"none"});
        $('.dis_B737_900').find('p').css({"border-bottom":"none"});
        $('.B737_800').css({"display":"none"});
        $('.B737_900').css({"display":"none"});
    })
    $('.dis_B737_800').on('click', function () {
        $('#container').css({"height":"3000px"});
        $('.B737_800').css({"display":"block"});
        $(this).find('p').css({"border-bottom": "3px solid rgb(102, 30, 67)"});
        $('.dis_B777_200').find('p').css({"border-bottom":"none"});
        $('.dis_B737_900').find('p').css({"border-bottom":"none"});
        $('.B777_200ER').css({"display":"none"});
        $('.B737_900').css({"display":"none"});
    })
    $('.dis_B737_900').on('click', function () {
        $('#container').css({"height":"3000px"});
        $('.B737_900').css({"display":"block"});
        $(this).find('p').css({"border-bottom": "3px solid rgb(102, 30, 67)"});
        $('.dis_B777_200').find('p').css({"border-bottom":"none"});
        $('.dis_B737_800').find('p').css({"border-bottom":"none"});
        $('.B777_200ER').css({"display":"none"});
        $('.B737_800').css({"display":"none"});
    })


});

