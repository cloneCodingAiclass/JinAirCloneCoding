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

    $(".arrow_img").on('click', function() {
        $(".arrow_img").css("display", "none");
        $(".trip_info2").slideDown(200);
        $(".arrow_up_img").css("display", "block");
    })
    $(".arrow_up_img").on('click', function() {
        $(".arrow_img").css("display", "block");
        $(".arrow_up_img").css("display", "none");
        $(".trip_info2").slideUp(200);
    })

    $("select .KRW").on('select', function() {
        $("butt_ok").css("background-color", "#BDD600");
    })
    $("select .USD").on('click', function() {
        $("butt_ok").css("background-color", "#BDD600");
    }) 

    $(".list1_wrap").on("click", function() {
        $(".list2_wrap").focus();
    })
    
    /*화면 구성 */

    $(".service_menu .menu1img").css("display", "none");
    $(".service_menu .menu1_invert").css("display", "block");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");
    
    
    $(".service_content_wrap1").css("display", "blcok");
    $(".service_content_wrap2").css("display", "none");    
    $(".service_content_wrap3").css("display", "none");
    $("service_content_wrap3 section1").css("background", "")
    $("service_content_wrap3 section1")

    $(".service_menu .menu1").on("click", function() {
        $(".service_content_wrap1").css("display", "block");
        $(".service_content_wrap2").css("display", "none"); 
        $(".service_content_wrap3").css("display", "none");
        $(this).css("color", "white");
        $(this).css("background-color", "#661e43");
        
        $(".service_menu .menu2").css("color", "#444");
        $(".service_menu .menu2").css("background-color", "#EBEBEB");
        $(".service_menu .menu3").css("color", "#444");
        $(".service_menu .menu3").css("background-color", "#EBEBEB");

        $(".service_menu .menu1img").css("display", "none");
        $(".service_menu .menu1_invert").css("display", "block");
    
        $(".service_menu .menu2img").css("display", "block");
        $(".service_menu .menu2_invert").css("display", "none");
    
        $(".service_menu .menu3img").css("display", "block");
        $(".service_menu .menu3_invert").css("display", "none");

        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");
        $(".seat_info").css("z-index", "20");

    })
    $(".service_menu .menu2").on("click", function() {
        $(".service_content_wrap1").css("display", "none");
        $(".service_content_wrap2").css("display", "block");  
        $(".service_content_wrap3").css("display", "none");
        $(this).css("color", "white");
        $(this).css("background-color", "#661e43");

        $(".service_menu .menu1").css("color", "#444");
        $(".service_menu .menu1").css("background-color", "#EBEBEB");
        $(".service_menu .menu3").css("color", "#444");
        $(".service_menu .menu3").css("background-color", "#EBEBEB");

        $(".service_menu .menu1img").css("display", "block");
        $(".service_menu .menu1_invert").css("display", "none");
    
        $(".service_menu .menu2img").css("display", "none");
        $(".service_menu .menu2_invert").css("display", "block");
    
        $(".service_menu .menu3img").css("display", "block");
        $(".service_menu .menu3_invert").css("display", "none");
    })
    $(".service_menu .menu3").on("click", function() {
        $(".service_content_wrap1").css("display", "none");
        $(".service_content_wrap2").css("display", "none");
        $(".service_content_wrap3").css("display", "block");
        $(this).css("color", "white");
        $(this).css("background-color", "#661e43");

        $(".service_menu .menu1").css("color", "#444");
        $(".service_menu .menu1").css("background-color", "#EBEBEB");
        $(".service_menu .menu2").css("color", "#444");
        $(".service_menu .menu2").css("background-color", "#EBEBEB");

        $(".service_menu .menu1img").css("display", "block");
        $(".service_menu .menu1_invert").css("display", "none");
    
        $(".service_menu .menu2img").css("display", "block");
        $(".service_menu .menu2_invert").css("display", "none");
    
        $(".service_menu .menu3img").css("display", "none");
        $(".service_menu .menu3_invert").css("display", "block");
    })


    /*좌석안내 모달창 */
    $(".seat_info_wrap .info").click(function() {
        $(".modal_seat_info_wrap").fadeIn(200);

        $(".modal_seat_info_wrap .close").click(function() {
            $(".modal_seat_info_wrap").fadeOut(200);
        })
    })

    
    /*좌석안내 모달창 끝 */
    /*구간선택 */

    $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#661e43");
    $(".service_content_wrap1 .service_title1 .section2").css("color", "#fff");
    $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
    $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");
    
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");

    $(".service_content_wrap1 .select_seat_wrap1").css("display", "flex");
    $(".service_content_wrap1 .select_seat_wrap2").css("display", "none");

    

    /*구간선택1 */
    $(".service_content_wrap1 .service_title1 .section1").on('click', function() {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");
        $(".seat_info").css("z-index", "20");

        $(this).css("background-color", "#661e43");
        $(this).css("color", "#fff");
        $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
        $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

        $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
        $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");
        $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
        $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

        $(".select_seat_wrap1").css("display", "flex");
        $(".select_seat_wrap2").css("display", "none");
        $(".passenger_info_wrap1").css("display", "block");
        $(".passenger_info_wrap2").css("display", "none");
        $(".seat_info_wrap1").css("display", "block");
        $(".seat_info_wrap2").css("display", "none");
    })
    /*구간선택1 끝*/

     /*구간선택2 */
    $(".service_content_wrap1 .service_title1 .section2").on('click', function() {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");

        $(this).css("background-color", "#661e43");
        $(this).css("color", "#fff");
        $(".service_title1 .section1").css("background-color", "#EBEBEB");
        $(".service_title1 .section1").css("color", "#444");

        $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "inline-block");
        $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "none");
        $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "none");
        $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "inline-block");
        $(".select_seat_wrap1").css("display", "none");
        $(".select_seat_wrap2").css("display", "flex");
        $(".passenger_info_wrap1").css("display", "none");
        $(".passenger_info_wrap2").css("display", "block");
        $(".seat_info_wrap1").css("display", "none");
        $(".seat_info_wrap2").css("display", "block");

    })
    /*구간선택2 */
    /*구간선택 끝 */

    /*스크롤시 따라다니는 영역 */
    $(window).scroll(function(){ 
        let x = $(".seat_info_wrap").offset().left+30;

        $(".seat_map").css("top", "0px");
        $(".seat_info_wrap").css("top", "0px");
            if ($(window).scrollTop() > $(".service_title1").offset().top-115 && $(window).scrollTop() < 1900) { 
                $(".move_map").css("position", "fixed");
                $(".move_map").css("top", ($(".select_seat ").offset().top)/2);
                $(".seat_info").css("position", "fixed");
                $(".seat_info").css("top", ($(".select_seat ").offset().top)/2);
                $(".seat_info").css("left", x);
                $(".seat_info").css("z-index", "20");
            } else if ($(window).scrollTop() > 1895) {
                $(".move_map").css("position", "absolute");
                $(".move_map").css("top", "1680px");
                $(".seat_info").css("position", "absolute");
                $(".seat_info").css("top", "1680px");
                $(".seat_info").css("left", "30px");
            }
            else {
                $(".move_map").css("position", "absolute");
                $(".move_map").css("top", "80px");
                $(".seat_info").css("position", "absolute");
                $(".seat_info").css("top", "95px");
                $(".seat_info").css("left", "30px");
            }
    })

    /*스크롤시 미니맵 이동 */
    $(window).scroll(function(){ 
        let a = $(window).scrollTop();  //스크롤 위치
        let b = $(".location").offset().top; //지도 가리키는 영역 위치
        
        //좌석선택영역 높이 : 2250px;
        //지도 높이 : 400px
        //지도 가르키는 영역 높이 : 160px

        let x = $(".move_map").height();
        // if($(window).scrollTop() >  $(".seat_map").offset().top+5) {
        //     $(".location").css("height", "160px");
        // } else {
        //     $(".location").css("heigth", "100px");
        // }
        if($(window).scrollTop() < 1900) {
            if(a/($(".location").height()*b < 400)) {
                $(".location").css("top", a/(2250/x));
            }
        }
    })
    /*스크롤시 미니맵 이동 끝*/
    /*스크롤시 따라다니는 영역 끝*/
    /*수하물 선택 구간 */

    $(".bot_bagg_price1 .cur").css("display", "none");
    $(".bot_bagg_price1 .price").text(" ");
    $(".bot_bagg_price2 .cur").css("display", "none");
    $(".bot_bagg_price2 .price").text(" ");

    $('#bagg1').change(function() {
        $(".select_bagg_price1 .select_bagg").text($(this).val());
        $(".bot_bagg_price1 .cur").css("display", "inline-block");
        $(".bot_bagg_price1 .price").text(" ");
        if($(this).val() == "5KG(+KRW 8,000)"){
            $(".bot_bagg_price1 .price").text("8,000");
        } else if($(this).val() == "10KG(+KRW 16,000)"){
            $(".bot_bagg_price1 .price").text("16,000");
        } else if($(this).val() == "15KG(+KRW 24,000)"){
            $(".bot_bagg_price1 .price").text("24,000");
        } else if($(this).val() == "20KG(+KRW 32,000)"){
            $(".bot_bagg_price1 .price").text("32,000");
        } else {
            $(".bot_bagg_price1 .cur").css("display", "none");
            $(".bot_bagg_price1 .price").text(" ");
        }
    });

    $('#bagg2').change(function() {
        $(".select_bagg_price2 .select_bagg").text($(this).val());
        $(".bot_bagg_price2 .cur").css("display", "inline-block");
        $(".bot_bagg_price2 .price").text(" ");
        if($(this).val() == "5KG(+KRW 8,000)"){
            $(".bot_bagg_price2 .price").text("8,000");
        } else if($(this).val() == "10KG(+KRW 16,000)"){
            $(".bot_bagg_price2 .price").text("16,000");
        } else if($(this).val() == "15KG(+KRW 24,000)"){
            $(".bot_bagg_price2 .price").text("24,000");
        } else if($(this).val() == "20KG(+KRW 32,000)"){
            $(".bot_bagg_price2 .cur").css("display", "inline-block");
            $(".bot_bagg_price2 .price").text("32,000");
        } else {
            $(".bot_bagg_price2 .cur").css("display", "none");
            $(".bot_bagg_price2 .price").text(" ");
        }
    });

    /*수하물 선택 구간 끝 */

    /*보험 선택 구간 */
    $('#select_product').change(function() {
        $(".bot_bagg_price2 .price").text(" ");
        if($(this).val() == "실속형"){
            $(".insurance_price .price").text("1,970");
        } else if($(this).val() == "표준형"){
            $(".insurance_price .price").text("3,660");
        } else if($(this).val() == "고급형"){
            $(".insurance_price .price").text("7,040");
        }
    });

    $("#check_ins").change(function(){
        if($("#check_ins").is(":checked")){
            $("select#select_product").prop("disabled",  false);
        }
        else{
            $("select#select_product").prop("disabled", true);
        }
    });

    /*보험 선택 구간 끝*/

    /*무료 수하물/기내식 안내*/
    $(".modal_content1").css("display", "block");
    $(".modal_content2").css("display", "none");
    $(".modal_menu_wrap > .menu1").css("background", "#661e43");
    $(".modal_menu_wrap > .menu1").css("color", "#fff");

    $(".modal_menu_wrap > .menu2").css("background", "#fff");
    $(".modal_menu_wrap > .menu2").css("color", "#444");

    $(".modal_menu_wrap .menu2").on("click", function() {
        $(".modal_menu_wrap > .menu1").css("background", "#fff");
        $(".modal_menu_wrap > .menu1").css("color", "#444");
        $(".modal_menu_wrap > .menu2").css("background", "#661e43");
        $(".modal_menu_wrap > .menu2").css("color", "#fff");
        $(".modal_content1").css("display", "none");
        $(".modal_content2").css("display", "block");
    })

    $(".modal_menu_wrap .menu1").on("click", function() {
        $(".modal_menu_wrap > .menu2").css("background", "#fff");
        $(".modal_menu_wrap > .menu2").css("color", "#444");
        $(".modal_menu_wrap > .menu1").css("background", "#661e43");
        $(".modal_menu_wrap > .menu1").css("color", "#fff");
        $(".modal_content1").css("display", "block");
        $(".modal_content2").css("display", "none");
    })

    /*무료 수하물/기내식 안내 끝*/ 

    /*보험가입 페이지*/
    $(".service_content_wrap3 .service_title1 .section1").css("background-color", "#661e43");
    $("service_content_wrap3 .service_title1 .section1").css("color", "#fff");

    $(".service_content_wrap3 .service_title1 .section2").css("background-color", "#661e43");
    $("service_content_wrap3 .service_title1 .section2").css("color", "#fff");

    $(".service_content_wrap3 .service_title1 .section2").off('click');
    $(".service_content_wrap3 .service_title1 .section1").off('click');

    $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
    $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
    $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
    $(".insurance_menu_wrap .ins_menu2").css("color", "#444");

    $(".insContent1").css("display", "block");
    $(".insContent2").css("display", "none");

    $(".insurance_price .next_butt").on("click", function() {
        $(".insurance_menu_wrap .ins_menu1").css("background-color", "#fff");
        $(".insurance_menu_wrap .ins_menu2").css("background-color", "#661e43");
        $(".insurance_menu_wrap .ins_menu1").css("color", "#444");
        $(".insurance_menu_wrap .ins_menu2").css("color", "#fff");
    
        $(".insContent1").css("display", "none");
        $(".insContent2").css("display", "block");


        // $(".service_content_wrap3").animate({scrollTop:10},300);
    })

    $(".insContent2 .ins_before_butt").on("click", function() {
        $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
        $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
        $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
        $(".insurance_menu_wrap .ins_menu2").css("color", "#444");

        let offset = $(".insurance_menu_wrap .ins_menu1").offset();
        $("html body").animate({scrollTop:offset.top},2000);

        $(".insContent1").css("display", "block");
        $(".insContent2").css("display", "none");
    })
    /*보험가입 페이지 끝 */

    /*좌석 선택 */

    $(".seat_P").css("display", "none");
    $("p.select_seat_num span.close").on('click', function() {
        $(".seat_num").text("");
        $(".select_seat_price .price").text("");
        $(".seat_P").css("display", "none");
        $('.seat_sel').css('pointer-events', 'auto');
    });

    $(".select_seat1 .box1").on("click", function() {
        $('.seat_sel').not(this).css('pointer-events', 'none');
        $(".passenger_info_wrap1 .seat_num").html($(this).html());
        $(this).toggleClass('background1');
        $(".passenger_info_wrap1 .select_seat_price .price").html("9,000");
        $(".passenger_info_wrap1 .seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').css('pointer-events', 'auto');
            $(".passenger_info_wrap1 .select_seat_price .price").html("");
            $(".passenger_info_wrap1 .seat_num").html("");
            $(".passenger_info_wrap1 .seat_P").css("display", "none");
        })
    })


    $(".select_seat .box2").on("click", function() {
        $('.seat_sel').not(this).css('pointer-events', 'none');
        $(".seat_num").text($(this).text());
        $(this).toggleClass('background2');
        $(".select_seat_price .price").text("5,000");
        $(".seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').not(this).css('pointer-events', 'auto');
            $(".seat_num").text("");
            $(".select_seat_price .price").text("");
            $(".seat_P").css("display", "none");
        })
    })
    $(".select_seat .box3").on("click", function() {
        $('.seat_sel').not(this).css('pointer-events', 'none');
        $(".seat_num").text($(this).text());
        $(this).toggleClass('background3');
        $(".select_seat_price .price").text("9,000");
        $(".seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').not(this).css('pointer-events', 'auto');
            $(".seat_num").text("");
            $(".select_seat_price .price").text("");
            $(".seat_P").css("display", "none");
        })

    })
    $(".select_seat .box4").on("click", function() {
        $('.seat_sel').not(this).css('pointer-events', 'none');
        $(".seat_num").text($(this).text());
        $(this).toggleClass('background4');
        $(".select_seat_price .price").text("7,000");
        $(".seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').not(this).css('pointer-events', 'auto');
            $(".seat_num").text("");
            $(".select_seat_price .price").text("");
            $(".seat_P").css("display", "none");
        })
    })
    $(".select_seat .box5").on("click", function() {
        $('.seat_sel').not(this).css('pointer-events', 'none');
        $(".seat_num").text($(this).text());
        $(this).toggleClass('background5');
        $(".select_seat_price .price").text("3,000");
        $(".seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').not(this).css('pointer-events', 'auto');
            $(".seat_num").text("");
            $(".select_seat_price .price").text("");
            $(".seat_P").css("display", "none");
        })
    })
    
    $(".select_seat .box6").on("click", function() {
        $(".seat_num").text($(this).text());
        $(this).toggleClass('background6');
        $(".select_seat_price .price").text("1,000");
        $(".seat_P").css("display", "block");
        $(this).on('click', function() {
            $('.seat_sel').not(this).css('pointer-events', 'auto');
            $(".seat_num").text("");
            $(".select_seat_price .price").text("");
            $(".seat_P").css("display", "none");
        })
    })


    /*좌석 선택 끝 */
    

    /*하단 총액 모달창 */
    $("#info_table_wrap").css("overflow", "hidden");
    $("#info_table_wrap").css("overflow-x", "none");

    $(".img").on('click', () => {
        $(".img").css("display","none");
        $(".img2").css("display","block");
        $("#modal_totP_wrap").fadeIn();
        $(".fix_modal").fadeIn();
    })
    $(".close").on('click', () => {
        $(".img2").css("display","none");
        $(".img").css("display","block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })
    $(".img2").on('click', () => {
        $(".img2").css("display","none");
        $(".img").css("display","block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })


    $(".plus_1").on('click', () => {
        $("#info_table_wrap").css("overflow", "scroll");
        $("#info_table_wrap").css("overflow-x", "hidden");
        $("#info_table_wrap").animate({scrollTop:300},600);
        $(".plus_1").css("display", "none");
        $(".minus_1").css("display", "inline-block");
    })
    $(".minus_1").on('click', () => {
        $("#info_table_wrap").css("overflow", "hidden");
        $("#info_table_wrap").css("overflow-x", "none");
        $(".plus_1").css("display", "inline-block");
        $(".minus_1").css("display", "none");
    })


    $(window).scroll(  function() {
        let y = $(".fix_bott_wrap").offset().top-650;
        let h = $(document).scrollTop();
        if(window.pageYOffset <= y) {
            $(".fix_bott").css("position", "fixed");
            $(".fix_bott").css("bottom", "0px");
            $("#modal_totP_wrap").css("position", "fixed");
            $("#modal_totP_wrap").css("top", "-100px");
        } else {
            $(".fix_bott").css("position", "absolute");
            $("#modal_totP_wrap").css("position", "absolute");
            $("#modal_totP_wrap").css("top", y-280);
        }
    });

    $(window).scroll(  function() {
        let y = $(".contentswrap").offset().top;
        let h = $(document).scrollTop();

        if(h > y) {
            $(".fix_trip_info").css("position", "fixed");
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "absolute");
        } else {
            $(".fix_trip_info").css("position", "absolute");
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "fixed");
        }
    })
   /*하단 총액 모달창 끝 */
});


$(() => {
    document.getElementById('end_date').valueAsDate = new Date('2022', '02', '20');
});


// $('.edit').click(function(){
//     $('.pwcheck_modal').fadeIn(200);
//     $('body').css('overflow', 'hidden');

//     $('.btn_cancel').click(function(e){
//         $('.pwcheck_modal').fadeOut(200);  
//         $('body').css('overflow', '');        
//         e.stopPropagation();  
//     });
// });

$(()=> {
    $('#modal_free_wrap').hide();
    $(".service_title2 .section1").on('click', () => {
        $("#modal_free_wrap").fadeIn();
    })
    $(".modal_free_wrap .close").on('click', () => {
        $("#modal_free_wrap").fadeOut();
    })
})


$(()=> {
    $('#modal_notice_wrap').hide();
    $(".select_seat .box3").on('click', () => {
        if($(".box3").hasClass("background3") === true) {
            $("#modal_notice_wrap").fadeIn();
        }
    })
    $(".modal_notice_wrap .close").on('click', () => {
        $("#modal_notice_wrap").fadeOut();
    })
    $(".bott .checkbox").change(function(){
        if($(".checkbox").is(":checked") === false){
            $(".butt_ok").off('click');
        }else{
            $(".butt_ok").on('click');
        }
    })
    $("#modal_notice_wrap .butt_ok").on('click', () => {
        $("#modal_notice_wrap").fadeOut();
    })
})
