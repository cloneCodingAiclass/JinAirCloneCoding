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

    $('.dis_schedule').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })
    $('.dis_departure').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.departure').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
    })
    $('.dis_route').on('click', function () {
        $('#container').css({"height":"1500px"});
        $('.route').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.departure').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })

    // 왕복 편도 번환
    $('#oneway').on('change', function(){
        $('.come_date_select_opt').css({"visibility":"hidden"});
        $('.dis_back').css({"display":"none"});
    })
    $('#between').on('change', function(){
        $('.come_date_select_opt').css({"visibility":"visible"});
        $('.dis_go').css('width','590px');
        $('.dis_back').css({"display":"block"});
        $('.dis_back').css('width','590px');
    })

    // 출발지, 도착지
    $('.go_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideDown(100);
        $('.go_layer1').slideUp(50);
        $(this).addClass("on");
        $('.arrive_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.go_select_opt').removeClass("on");
    })
    $('.arrive_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer1').slideDown(100);
        $('.go_layer').slideUp(50);
        $(this).addClass("on");
        $('.go_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.arrive_select_opt').removeClass("on");
    })

    // 조회 결과 도출
    $('.search_btn').on('click', function () {
        $('.result_wrapper').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })
    $('.de_result_btn').on('click', function () {
        $('.de_result_wrap').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })

    // 스케줄 결과 표
    $('.dis_go').on('click', function () {
        $('.go').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_back').css({"background-color":"white", "color": "#444"});
        $('.back').css({"display":"none"});
    })
    $('.dis_back').on('click', function () {
        $('.back').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_go').css({"background-color":"white", "color": "#444"});
        $('.go').css({"display":"none"});
    })

    // 달력 모달
    $('.go_date_select_opt').on('click', function () {
        $('.cal').css({"display":"flex"});
    })
    $('.come_date_select_opt').on('click', function () {
        $('.cal').css({"display":"flex"});
    })
    $('.x_box').on('click', function () {
        $('.cal').css({"display":"none"});
    })
    $('.calscroll').find('a').on('click', function () {
        $('.cal').css({"display":"none"});
    });

});
