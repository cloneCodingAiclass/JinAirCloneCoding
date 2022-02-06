$(function () {
    $('.nav11').find('a').css({"color":"rgb(124,0,72)"});
    $('.nav11').siblings('li').css({"display":"block"});
    $('.nav11').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $(this).find('a').css({"color":"rgb(124,0,72)"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    });

    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav11').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav11').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav11').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav11').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
        $('.nav11').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })

    $(()=> {
        $(".coupon_btn").on('click', () => {
            $("#modal_isfind").fadeIn();
        })
        $(".complete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
        $(".uncomplete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
    })

    $(()=> {
        $(".del_btn").on('click', () => {
            $("#modal_isfind").fadeIn();
        })
        $(".complete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
        $(".uncomplete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
    })

    $(()=> {
        $(".edit_btn").on('click', () => {
            $("#modal_isfind").fadeIn();
        })
        $(".complete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
        $(".uncomplete").on('click', () => {
            $("#modal_isfind").fadeOut();
        })
    })

});