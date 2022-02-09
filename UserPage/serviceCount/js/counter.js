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


/* 컨테이너 js */

$(() => {
    $("#domestic_tab").on('click', function (e) {
        $('#domestic').css({ "display": "block" });
        $('#international').css({ "display": "none" });
        $('#city').css({ "display": "none" });
    });
    $(() => {
        $("#international_tab").on('click', function (e) {
            $('#international').css({ "display": "block" });
            $('#international_tab').css({"background-color":"#661e43"});
            $('#international_tab').css({"color" : "#f7f7f6"});
            $('#domestic').css({ "display": "none" });
            $('#city').css({ "display": "none" });
        })
    })
    $(() => {
        $("#city_tab").on('click', function (e) {
            $('#city').css({ "display": "block" });
            $('#city_tab').css({"background-color":"#661e43"});
            $('#city_tab').css({"color" : "#f7f7f6"});
            $('#international').css({ "display": "none" });
            $('#domestic').css({ "display": "none" });
        })
    })
})
$(() => {
    $("#domestic_tab").on('click', function (e) {
        $('#domestic_tab').css({"background-color":"#661e43"});
        $('#domestic_tab').css({"color" : "#f7f7f6"});
        $('#city_tab').css({"background-color":"#f7f7f6"});
        $('#city_tab').css({"color" : "#444"});
        $('#international_tab').css({"background-color":"#f7f7f6"});
        $('#international_tab').css({"color" : "#444"});
    })
    $("#international_tab").on('click', function (e) {
        $('#international_tab').css({"background-color":"#661e43"});
        $('#international_tab').css({"color" : "#f7f7f6"});
        $('#city_tab').css({"background-color":"#f7f7f6"});
        $('#city_tab').css({"color" : "#444"});
        $('#domestic_tab').css({"background-color":"#f7f7f6"});
        $('#domestic_tab').css({"color" : "#444"});
    })
    $("#city_tab").on('click', function (e) {
        $('#city_tab').css({"background-color":"#661e43"});
        $('#city_tab').css({"color" : "#f7f7f6"});
        $('#international_tab').css({"background-color":"#f7f7f6"});
        $('#international_tab').css({"color" : "#444"});
        $('#domestic_tab').css({"background-color":"#f7f7f6"});
        $('#domestic_tab').css({"color" : "#444"});
    })
})


/* 메뉴 탭 js */
$(function() {
    $("#pointInfo_btn").click(function(){
        $('.pointInfo_modal').fadeIn();
    });
    $(".modal_content").click(function(){
        $('.pointInfo_modal').fadeOut();
    });
});
