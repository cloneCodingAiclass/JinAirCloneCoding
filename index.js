'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.open1').css({"border-bottom":"none"});
        $('.open2').css({"border-bottom":"none"});
        $('.open3').css({"border-bottom":"none"});
        $('.open4').css({"border-bottom":"none"});
        $('.open5').css({"border-bottom":"none"});
    })


    $('.m_phone_menu').find('img').on('click', function(){
        $('.m_menu').css({"display":"block"});
    })
    $('.m_xbtn').find('img').on('click', function(){
        $('.m_menu').css({"display":"none"});
    })

    $('.m_open1').find('a').on('click', function(){
        $('.m_reservation').css({"display":"block"});
        $('.m_service').css({"display":"none"});
        $('.m_benefit').css({"display":"none"});
        $('.m_point').css({"display":"none"});
        $('.m_optional').css({"display":"none"});
        $(this).css({"color":"#6d073a"});
        $('.m_open2').find('a').css({"color":"black"});
        $('.m_open3').find('a').css({"color":"black"});
        $('.m_open4').find('a').css({"color":"black"});
        $('.m_open5').find('a').css({"color":"black"});
        $('.m_open1').css({"background-color":"white"});
        $('.m_open2').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open3').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open4').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open5').css({"background-color":"rgb(248, 248, 248)"});
    })
    $('.m_open2').find('a').on('click', function(){
        $('.m_service').css({"display":"block"});
        $('.m_reservation').css({"display":"none"});
        $('.m_benefit').css({"display":"none"});
        $('.m_point').css({"display":"none"});
        $('.m_optional').css({"display":"none"});
        $(this).css({"color":"#6d073a"});
        $('.m_open1').find('a').css({"color":"black"});
        $('.m_open3').find('a').css({"color":"black"});
        $('.m_open4').find('a').css({"color":"black"});
        $('.m_open5').find('a').css({"color":"black"});
        $('.m_open2').css({"background-color":"white"});
        $('.m_open1').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open3').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open4').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open5').css({"background-color":"rgb(248, 248, 248)"});
    })
    $('.m_open3').find('a').on('click', function(){
        $('.m_benefit').css({"display":"block"});
        $('.m_reservation').css({"display":"none"});
        $('.m_service').css({"display":"none"});
        $('.m_point').css({"display":"none"});
        $('.m_optional').css({"display":"none"});
        $(this).css({"color":"#6d073a"});
        $('.m_open1').find('a').css({"color":"black"});
        $('.m_open2').find('a').css({"color":"black"});
        $('.m_open4').find('a').css({"color":"black"});
        $('.m_open5').find('a').css({"color":"black"});
        $('.m_open3').css({"background-color":"white"});
        $('.m_open1').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open2').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open4').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open5').css({"background-color":"rgb(248, 248, 248)"});
    })
    $('.m_open4').find('a').on('click', function(){
        $('.m_point').css({"display":"block"});
        $('.m_reservation').css({"display":"none"});
        $('.m_service').css({"display":"none"});
        $('.m_benefit').css({"display":"none"});
        $('.m_optional').css({"display":"none"});
        $(this).css({"color":"#6d073a"});
        $('.m_open1').find('a').css({"color":"black"});
        $('.m_open2').find('a').css({"color":"black"});
        $('.m_open3').find('a').css({"color":"black"});
        $('.m_open5').find('a').css({"color":"black"});
        $('.m_open4').css({"background-color":"white"});
        $('.m_open1').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open2').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open3').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open5').css({"background-color":"rgb(248, 248, 248)"});
    })
    $('.m_open5').find('a').on('click', function(){
        $('.m_optional').css({"display":"block"});
        $('.m_reservation').css({"display":"none"});
        $('.m_service').css({"display":"none"});
        $('.m_benefit').css({"display":"none"});
        $('.m_point').css({"display":"none"});
        $(this).css({"color":"#6d073a"});
        $('.m_open1').find('a').css({"color":"black"});
        $('.m_open2').find('a').css({"color":"black"});
        $('.m_open3').find('a').css({"color":"black"});
        $('.m_open4').find('a').css({"color":"black"});
        $('.m_open5').css({"background-color":"white"});
        $('.m_open1').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open2').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open3').css({"background-color":"rgb(248, 248, 248)"});
        $('.m_open4').css({"background-color":"rgb(248, 248, 248)"});
    })
});
