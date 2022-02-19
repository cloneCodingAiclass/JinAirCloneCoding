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


    /*여정 및 운임정보 */
    $(".datail_add").hide();
    $(".arr_top").css("display", "none");
    $(".arr_bott").css("display", "block");
    $(".datail_add").css("width", "100%");


    $(".arr_bott1").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top1").css("display", "inline-block");
        // $(".datail_add1").slideDown(200);
        $(".datail_add1").toggle();
    })
    $(".arr_top1").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott1").css("display", "inline-block");
        $(".datail_add1").slideUp(200);
    })

    $(".arr_bott2").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top2").css("display", "block");
        $(".datail_add2").slideDown();
    })
    $(".arr_top2").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott2").css("display", "block");
        $(".datail_add2").slideUp();
    })

    $(".arr_bott3").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top3").css("display", "block");
        $(".datail_add3").slideDown();
    })
    $(".arr_top3").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott3").css("display", "block");
        $(".datail_add3").slideUp();
    })

    
    let a = $(".detail1").offset().top - 30;
    let x = $(".detail1").offset().left + 30;
    let b = $(".detail2").offset().top - 30;
    let y = $(".detail2").offset().left + 30;

    $(".modal_flight_info1").css("top", a);
    $(".modal_flight_info2").css("top", b);
    $(".modal_flight_info1").css("left", x);
    $(".modal_flight_info2").css("left", y);

    /*여정 및 운임정보 끝*/

    /*부가서비스 */
    $(".arr_bott4").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top4").css("display", "block");
        $(".datail_add4").slideDown();
    })
    $(".arr_top4").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott4").css("display", "block");
        $(".datail_add4").slideUp();
    })

    $(".arr_bott5").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top5").css("display", "block");
        $(".datail_add5").slideDown();
    })
    $(".arr_top5").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott5").css("display", "block");
        $(".datail_add5").slideUp();
    })


    $(".arr_bott6").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top6").css("display", "block");
        $(".datail_add6").slideDown();
    })
    $(".arr_top6").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott6").css("display", "block");
        $(".datail_add6").slideUp();
    })
    /*부가서비스 끝 */

    
    /*할인*/
    $('input[name=discount]').change(function() {
        $(".discount_coup").css("display","block");
        $(".discount_card").css("display","none");
    
        if ($("#coupone").is(":checked")) {
            $(".discount_coup").css("display","block");
            $(".discount_card").css("display","none");
        }
        if ($("#card").is(":checked")) {
            $(".discount_coup").css("display","none");
            $(".discount_card").css("display","block");
        }
    });

    /*할인 끝*/

    /*결제정보*/
    $(".card_wrap2").hide();
    $(".sel_easy_more").on("click", function() {
        $(".card_wrap2").toggle();

    })

    $('input[name=payM]').change(function() {
        if($("#payM1").is(":checked")) {
            $(".cardImg_wrap1").css("background-color", "#7E0049");
            $("#cardImg1").removeClass("cardImg1");
            $("#cardImg1").addClass("cardImg1-2")
            $(".cardImg_wrap1 .text").css("color", "#fff");

            $(".cardImg_wrap").not(".cardImg_wrap1").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap1 .text").css("color", "#444");

            // $("#cardImg1").removeClass("cardImg1-2");
            // $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg4").removeClass("cardImg4-2");
            $("#cardImg4").addClass("cardImg4");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");

            $("#selectCardCode").css("display", "block");
            $("#selectInstallment").css("display", "block");
            $(".card_wrap2").hide();
        }
        if($("#payM2").is(":checked")) {
            $(".cardImg_wrap2").css("background-color", "#2B64CE");
            $("#cardImg2").removeClass("cardImg2");
            $("#cardImg2").addClass("cardImg2-2");
            $(".cardImg_wrap").not(".cardImg_wrap2").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap2 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            // $("#cardImg2").removeClass("cardImg2-2");
            // $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");

            $("#selectCardCode").css("display", "block");
            $("#selectInstallment").css("display", "none");
            $(".card_wrap2").hide();
        }

        if($("#payM3").is(":checked")) {
            $(".cardImg_wrap3").css("background-color", "#7E0049");
            $(".cardImg_wrap3 .text").css("color", "#fff");
            $("#cardImg3").removeClass("cardImg3");
            $("#cardImg3").addClass("cardImg3-2");
            $(".cardImg_wrap").not(".cardImg_wrap3").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap3 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            // $("#cardImg3").removeClass("cardImg3-2");
            // $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
            $(".card_wrap2").hide();
        }
        if($("#payM4").is(":checked")) {
            $(".cardImg_wrap4").css("background-color", "#FFEB00");
            $(".cardImg_wrap4 .text").css("color", "#fff");
            $(".cardImg_wrap").not(".cardImg_wrap4").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap4 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");

            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
            $(".card_wrap2").hide();
        }
        if($("#payM5").is(":checked")) {
            $(".cardImg_wrap5").css("background-color", "#92278F");
            $(".cardImg_wrap5 .text").css("color", "#fff");
            $("#cardImg5").removeClass("cardImg5");
            $("#cardImg5").addClass("cardImg5-2");
            $(".cardImg_wrap").not(".cardImg_wrap5").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap5 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            // $("#cardImg5").removeClass("cardImg5-2");
            // $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }
        if($("#payM6").is(":checked")) {
            $(".cardImg_wrap6").css("background-color", "#282864");
            $(".cardImg_wrap6 .text").css("color", "#fff");
            $("#cardImg6").removeClass("cardImg6");
            $("#cardImg6").addClass("cardImg6-2");
            $(".cardImg_wrap").not(".cardImg_wrap6").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap6 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            // $("#cardImg6").removeClass("cardImg6-2");
            // $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }
        if($("#payM7").is(":checked")) {
            $(".cardImg_wrap7").css("background-color", "#273447");
            $(".cardImg_wrap7 .text").css("color", "#fff");
            $("#cardImg7").removeClass("cardImg7");
            $("#cardImg7").addClass("cardImg7-2");
            $(".cardImg_wrap").not(".cardImg_wrap7").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap7 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            // $("#cardImg7").removeClass("cardImg7-2");
            // $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }

        if($("#payM8").is(":checked")) {
            $(".cardImg_wrap8").css("background-color", "#00C73C");
            $(".cardImg_wrap8 .text").css("color", "#fff");
            $("#cardImg8").removeClass("cardImg8");
            $("#cardImg8").addClass("cardImg8-2");
            $(".cardImg_wrap").not(".cardImg_wrap8").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap8 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            // $("#cardImg8").removeClass("cardImg8-2");
            // $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }

        if($("#payM9").is(":checked")) {
            $(".cardImg_wrap9").css("background-color", "#E7181E");
            $(".cardImg_wrap9 .text").css("color", "#fff");
            $("#cardImg9").removeClass("cardImg9");
            $("#cardImg9").addClass("cardImg9-2");
            $(".cardImg_wrap").not(".cardImg_wrap9").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap9 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            // $("#cardImg9").removeClass("cardImg9-2");
            // $("#cardImg9").addClass("cardImg9");
            $("#cardImg10").removeClass("cardImg10-2");
            $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }
        if($("#payM10").is(":checked")) {
            $(".cardImg_wrap10").css("background-color", "#FF1744");
            $(".cardImg_wrap10 .text").css("color", "#fff");
            $("#cardImg10").removeClass("cardImg10");
            $("#cardImg10").addClass("cardImg10-2");
            $(".cardImg_wrap").not(".cardImg_wrap10").css("background-color", "#fff");
            $(".cardImg_wrap .text").not(".cardImg_wrap10 .text").css("color", "#444");

            $("#cardImg1").removeClass("cardImg1-2");
            $("#cardImg1").addClass("cardImg1");
            $("#cardImg2").removeClass("cardImg2-2");
            $("#cardImg2").addClass("cardImg2");
            $("#cardImg3").removeClass("cardImg3-2");
            $("#cardImg3").addClass("cardImg3");
            $("#cardImg5").removeClass("cardImg5-2");
            $("#cardImg5").addClass("cardImg5");
            $("#cardImg6").removeClass("cardImg6-2");
            $("#cardImg6").addClass("cardImg6");
            $("#cardImg7").removeClass("cardImg7-2");
            $("#cardImg7").addClass("cardImg7");
            $("#cardImg8").removeClass("cardImg8-2");
            $("#cardImg8").addClass("cardImg8");
            $("#cardImg9").removeClass("cardImg9-2");
            $("#cardImg9").addClass("cardImg9");
            // $("#cardImg10").removeClass("cardImg10-2");
            // $("#cardImg10").addClass("cardImg10");
            $("#selectCardCode").css("display", "none");
            $("#selectInstallment").css("display", "none");
        }

        
    })
    /*결제정보 끝*/






});



$(() => {
    $('#modal_free_wrap').hide();
    $(".service_title2 .section1").on('click', () => {
        $("#modal_free_wrap").fadeIn();
    })
    $(".modal_free_wrap .close").on('click', () => {
        $("#modal_free_wrap").fadeOut();
    })
})


/* 항공기 위험물 안내 모달창 */
$(() => {
    $("#modal_restricted_items_wrap").hide();
    $("#modal_restricted_items_wrap #modal_conf_ok").hide();

    $(".checkbox_wrap #checkbox").on("click", () => {
        $("#modal_restricted_items_wrap").fadeIn();
        $('body').css("overflow", "hidden");
    })
    $("#modal_restricted_items_wrap .butt_canc, #modal_restricted_items_wrap .close").on("click", () => {
        $("#modal_restricted_items_wrap").fadeOut()
        $(".checkbox_wrap #checkbox").prop("checked", false);
        $('body').css("overflow", "scroll");
    });
    $("#modal_restricted_items_wrap .butt_ok").on("click", () => {
        if($("#modal_restricted_items_wrap #modal_checkbox").is(":checked")) {
            $("#modal_restricted_items_wrap").fadeOut();
            $(".checkbox_wrap #checkbox").prop("checked", true);
            $('body').css("overflow", "scroll");
        } else {
            $("#modal_restricted_items_wrap #modal_conf_ok").fadeIn();
        }
    });
    $("#modal_restricted_items_wrap #modal_conf_ok").on("click", () => {
        $("#modal_restricted_items_wrap #modal_conf_ok").fadeOut();
    })
})
/* 항공기 위험물 안내 모달창 끝*/

/*운임 규정 안내 모달창 */
$(() => {
    $("#modal_fare_rules").hide();
    $("#modal_fare_rules #modal_conf_ok").hide();

    $(".butt_pay").on("click", () => {
        $("#modal_fare_rules").fadeIn();
        $('body').css("overflow", "hidden");
    })
    $("#modal_fare_rules .butt_canc, #modal_fare_rules .close").on("click", () => {
        $("#modal_fare_rules").fadeOut();
        $('body').css("overflow", "scroll");
    });

    $("#modal_fare_rules .butt_ok").on("click", () => {
        if($("#modal_fare_rules #checkBox").is(":checked")) {
            $("#modal_fare_rules").fadeOut();
            $('body').css("overflow", "scroll");
        } else {
            $("#modal_fare_rules > #modal_conf_ok").fadeIn();
        }
    });
    $("#modal_conf_ok .butt_conf").on("click", () => {
        $("#modal_fare_rules #modal_conf_ok").fadeOut();
    })
})

/*운임 규정 안내 모달창 끝 */

/*신용카드 무이자 할부 및 혜택 안내 모달창 */
$(() => {
    $("#modal_credit_int").hide();
    $(".dis_int").on("click", () => {
        $("#modal_credit_int").fadeIn();
        $('body').css("overflow", "hidden");
    })
    $("#modal_credit_int .butt_canc_credit, #modal_fare_rules, .butt_ok_credit, .close").on("click", () => {
        $("#modal_credit_int").fadeOut();
        $('body').css("overflow", "scroll");
    });

})
/*신용카드 무이자 할부 및 혜택 안내 모달창 끝 */

$(() => {
    $(".modal_flight_info1").hide();
    $(".modal_flight_info2").hide();

    $("p.detail1").on("click", () => {
        $(".modal_flight_info1").fadeIn();
    })
    $(".modal_flight_info1 .close1").on("click", () => {
        $(".modal_flight_info1").fadeOut();
    })

    $("p.detail2").on("click", () => {
        $(".modal_flight_info2").fadeIn();
    })
    $(".modal_flight_info2 .close2").on("click", () => {
        $(".modal_flight_info2").fadeOut();
    })
})