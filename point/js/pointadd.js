$(function () {
    $('.nav9').find('a').css({"color":"rgb(124,0,72)"});
    $('.nav9').siblings('li').css({"display":"block"});
    $('.nav9').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});

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
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
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
    });

    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav9').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav9').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav9').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav9').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    })

    $('.user_sch').hide();
    $('#select_box').change(function() {
        let result = $('#select_box option:selected').val();
        if (result != '이륙 지원 보상') {
        $('.user_sch').show();
        } else {
        $('.user_sch').hide();
        }
    });
    $('.rs_sch').hide();
    $('#select_box').change(function() {
        let result = $('#select_box option:selected').val();
        if (result == ('이륙 지원 보상')) {
        $('.rs_sch').show();
        } else {
        $('.rs_sch').hide();
        }
    }); 
});