$(function () {
    $('.nav1').find('a').css({"color":"#BDD600"});
    $('.nav1').siblings('li').css({"display":"block"});
    $('.nav1').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    
    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav1').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })

});

$(function () {


    let country = $('.other_select option:selected').val();

    switch(country){
        case '부다페스트' :
            function printtime(){
                const date = new Date();
                const yyyy = date.getFullYear();
                const mo = date.getMonth()+1;
                const dd = date.getDate();
                const hh = date.getHours()-8;
                const mm = date.getMinutes();
                const ss = date.getSeconds();
                document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + hh + ":" + mm + ":" + ss;
            }
                break;
    }
    const st = window.setInterval(printtime);

});

function printtime(){
const date = new Date();
const yyyy = date.getFullYear();
const mo = date.getMonth()+1;
const dd = date.getDate();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();
document.getElementById("korea_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + ":" + mm + ":" + ss;
}

const st = window.setInterval(printtime);  // 입장시 시간 출력



