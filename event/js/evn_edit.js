$(function () {
    $('.nav8').find('a').css({"color":"rgb(124,0,72)"});
    $('.nav8').siblings('li').css({"display":"block"});

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
    });

    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav8').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav8').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav8').siblings('li').css({"display":"block"});
        $('.nav8').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav8').parent().siblings().find('a').css({"color":"rgb(0,0,0)"});
        $('.nav8').find('a').css({"color":"rgb(124,0,72)"});
        $('.nav8').siblings('li').css({"display":"block"});
        $('.nav8').parent().siblings().find('li').css({"display":"none"});
    })
});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
    document.getElementById('end_date').valueAsDate = new Date();
});


$(()=> {
    $('#modal_iseditcancel').hide();
    $(".canc_btn").on('click', () => {
        $("#modal_iseditcancel").fadeIn();
    })
    $(".cancuncomplete").on('click', () => {
        location.href='./evn_view.html';
    })
    $(".canccomplete").on('click', () => {
        $("#modal_iseditcancel").fadeOut();
    })
});

$(()=> {
    $('#modal_isedit').hide();
    $(".edit_btn").on('click', () => {
        $("#modal_isedit").fadeIn();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_isedit").fadeOut();
    })
});

$(()=> {
    $('#ex_file').on('change', function(){
        $('.filetext').val($('#ex_file').val());
    });
});