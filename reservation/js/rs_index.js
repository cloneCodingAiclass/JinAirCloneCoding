$(function () {
    $('.nav3').find('a').css({"color":"rgb(124,0,72)"});
    $('.nav3').siblings('li').css({"display":"block"});
    $('.nav3').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});

    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parents().siblings().find('li').css({"display":"none"});
    });

    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav3').parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav3').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parents().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav3').parents().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav3').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parents().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })

});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
    document.getElementById('end_date').valueAsDate = new Date();
});


$(()=> {
    $(".cancbutt").on('click', () => {
        $("#modal_iscancel").fadeIn();
    })
    $(".complete").on('click', () => {
        $("#modal_iscancel").fadeOut();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_iscancel").fadeOut();
    })
})