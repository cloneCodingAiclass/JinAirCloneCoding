'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.reservation').slideDown("fast");
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.service').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.benefit').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
    })
});
