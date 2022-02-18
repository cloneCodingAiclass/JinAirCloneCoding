'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
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

    $(".arrow_img").on('click', function () {
        $(".arrow_img").css("display", "none");
        $(".trip_info2").slideDown(200);
        $(".arrow_up_img").css("display", "block");
    })
    $(".arrow_up_img").on('click', function () {
        $(".arrow_img").css("display", "block");
        $(".arrow_up_img").css("display", "none");
        $(".trip_info2").slideUp(200);
    })

    $("select .KRW").on('select', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })
    $("select .USD").on('click', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })

    $(".list1_wrap").on("click", function () {
        $(".list2_wrap").focus();
    })


    /* 상단 fixed */
    $(window).scroll(function () {
        let y = $(".contentswrap").offset().top;    //고정할 메뉴
        if (window.pageYOffset <= $(".contentswrap").offset().top) {
            $(".fix_trip_info").css("position", "fixed");
            $(".fix_trip_info").css("top", y);
        } else {
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "absolute");
        }
    });
    /* 상단 fixed 끝 */


    /* 하단 fixed */


    $("#info_table_wrap").css("overflow", "hidden");
    $("#info_table_wrap").css("overflow-x", "none");

    $(".img").on('click', () => {
        $(".img").css("display", "none");
        $(".img2").css("display", "block");
        $("#modal_totP_wrap").fadeIn();
        $(".fix_modal").fadeIn();
    })
    $(".close").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })
    $(".img2").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })

    /*자세히 보기 */
    $(".det1").on('click', () => {
        $(".detD1").css("display", "inline-block");
    })

    $(".det2").on('click', () => {
        $(".detD2").css("display", "inline-block");
    })

    let offset = $(".modal_price_info_wrap").offset();
    $(".plus_1").on('click', () => {
        $("#info_table_wrap").css("overflow", "scroll");
        $("#info_table_wrap").css("overflow-x", "hidden");
        $("#info_table_wrap").animate({ scrollTop: 260 }, 600);
        $(".plus_1").css("display", "none");
        console.log(offset);
        $(".minus_1").css("display", "inline-block");
    })
    $(".minus_1").on('click', () => {
        $("#info_table_wrap").css("overflow", "hidden");
        $("#info_table_wrap").css("overflow-x", "none");
        $(".plus_1").css("display", "inline-block");
        $(".minus_1").css("display", "none");
    })


    $(window).scroll(function () {
        let y = $(".fix_bott_wrap").offset().top - 650;
        if (window.pageYOffset <= y) {
            $(".fix_bott").css("position", "fixed");
            $(".fix_bott").css("bottom", "0px");
            $("#modal_totP_wrap").css("position", "fixed");
            $("#modal_totP_wrap").css("top", "175px");
            $(".fix_trip_info").css("position", "fixed");
        } else {
            $(".fix_bott").css("position", "absolute");
            $("#modal_totP_wrap").css("position", "absolute");
            $("#modal_totP_wrap").css("top", y);

        }
    });


    /*날짜 설정 */
    let today = new Date();


    $("#a").click(function () {

        $("#div").unbind("click");

    });
    let res = $(".date3").text();
    console.log(res);
    let sub_res = res.substring(0, 10);
    let select_day = sub_res.split("-");

    let yyyy = Number(select_day[0]);
    let mm = Number(select_day[1]);
    let dd = Number(select_day[2]);
    let week = new Array('일', '월', '화', '수', '목', '금', '토'); //숫자로 추출한sel_day 문자로 변경할 배열;
    let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

    let date0 = new Date(yyyy, mm, dd - 3);
    let date1 = new Date(yyyy, mm, dd - 2);
    let date2 = new Date(yyyy, mm, dd - 1);
    let date3 = new Date(yyyy, mm, dd);
    let date4 = new Date(yyyy, mm, dd + 1);
    let date5 = new Date(yyyy, mm, dd + 2);
    let date6 = new Date(yyyy, mm, dd + 3);


    let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()}-${date0.getDate()}(${week[date0.getDay()]})`;
    let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()}-${date1.getDate()}(${week[date1.getDay()]})`;
    let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()}-${date2.getDate()}(${week[date2.getDay()]})`;
    let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()}-${date3.getDate()}(${week[date3.getDay()]})`;
    let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()}-${date4.getDate()}(${week[date4.getDay()]})`;
    let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()}-${date5.getDate()}(${week[date5.getDay()]})`;
    let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()}-${date6.getDate()}(${week[date6.getDay()]})`;


    $(".date0").html(sel_date0);
    $(".date1").html(sel_date1);
    $(".date2").html(sel_date2);
    $(".date3").html(sel_date3);
    $(".date4").html(sel_date4);
    $(".date5").html(sel_date5);
    $(".date6").html(sel_date6);


    $(".date0").on("click", function () {
        res = $(".date0").html();
        set_day(res);
    });
    $(".date1").on("click", function () {
        res = $(".date1").html();
        set_day(res);
    });
    $(".date2").on("click", function () {
        res = $(".date2").html();
        set_day(res);
    });
    $(".date3").on("click", function () {
        res = $(".date3").html();
        set_day(res);
    });
    $(".date4").on("click", function () {
        res = $(".date4").html();
        set_day(res);
    });
    $(".date5").on("click", function () {
        res = $(".date5").html();
        set_day(res);
    });
    $(".date6").on("click", function () {
        res = $(".date6").html();
        set_day(res);
    });




});


// 운임 규정
$(() => {
    // 모달 열기
    $(".crr_open").on('click', function () {
        $(".crr_modal").fadeIn(200);
        $('body').css("overflow", "hidden");
    })
    // 모달 닫기
    $(".close_crr").on('click', function () {
        $('.crr_modal').fadeOut(200);
        $('body').css("overflow", "");
    })
    // 운임 종류
    $(".kind_btn").on('click', function () {
        $(".crr_superlow, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
        $(".superlow_btn, .flex_btn, .jini_btn, .biz_btn").css({
            "background-color": "#fff",
            "color": "#555"
        })
        $(".crr_index").css("display", "block");
        $(".kind_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "#fff"
        })
        $(".crr_box").css({
            "top": "18%",
            "height": "660px"
        });
        $(".crr_contents").css({
            "height": "550px"
        })
    })

    // 슈퍼로우
    $(".superlow_btn").on('click', function () {
        $(".crr_index, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
        $(".kind_btn, .flex_btn, .jini_btn, .biz_btn").css({
            "background-color": "#fff",
            "color": "#555"
        })
        $(".crr_superlow").css({
            "display": "block"
        });
        $(".superlow_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "#fff"
        })
        $(".crr_box").css({
            "top": "5%",
            "height": "900px"
        });
        $(".crr_contents").css({
            "height": "820px"
        })
    })

    // 플렉스
    $(".flex_btn").on('click', function () {
        $(".crr_superlow, .crr_index, .crr_jini, .crr_biz").css("display", "none");
        $(".superlow_btn, .kind_btn, .jini_btn, .biz_btn").css({
            "background-color": "#fff",
            "color": "#555"
        })
        $(".crr_flex").css("display", "block");
        $(".flex_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "#fff"
        })
        $(".crr_box").css({
            "top": "5%",
            "height": "900px"
        });
        $(".crr_contents").css({
            "height": "820px"
        })
    })

    // 지니
    $(".jini_btn").on('click', function () {
        $(".crr_superlow, .crr_flex, .crr_index, .crr_biz").css("display", "none");
        $(".superlow_btn, .flex_btn, .kind_btn, .biz_btn").css({
            "background-color": "#fff",
            "color": "#555"
        })
        $(".crr_jini").css("display", "block");
        $(".jini_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "#fff"
        })
        $(".crr_box").css({
            "top": "5%",
            "height": "900px"
        });
        $(".crr_contents").css({
            "height": "820px"
        })
    })

    // 지니비즈
    $(".biz_btn").on('click', function () {
        $(".crr_superlow, .crr_flex, .crr_jini, .crr_index").css("display", "none");
        $(".superlow_btn, .flex_btn, .jini_btn, .kind_btn").css({
            "background-color": "#fff",
            "color": "#555"
        })
        $(".crr_biz").css("display", "block");
        $(".biz_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "#fff"
        })
        $(".crr_box").css({
            "top": "5%",
            "height": "900px"
        });
        $(".crr_contents").css({
            "height": "820px"
        })
    })
})


function set_day(res) {
    let ress = res;
    console.log(ress);
    let sub_res;
    console.log(ress.length);
    if (ress.length == 13) {
        sub_res = res.substring(0, 10);
    } else if (ress.length == 12) {
        sub_res = res.substring(0, 9);
    } else {
        sub_res = res.substring(0, 8);
    }
    let select_day = sub_res.split("-");

    let yyyy = Number(select_day[0]);
    let mm = Number(select_day[1]);
    let dd = Number(select_day[2]);
    let week = new Array('일', '월', '화', '수', '목', '금', '토'); //숫자로 추출한sel_day 문자로 변경할 배열;
    let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

    let date0 = new Date(yyyy, mm, dd - 3);
    let date1 = new Date(yyyy, mm, dd - 2);
    let date2 = new Date(yyyy, mm, dd - 1);
    let date3 = new Date(yyyy, mm, dd);
    let date4 = new Date(yyyy, mm, dd + 1);
    let date5 = new Date(yyyy, mm, dd + 2);
    let date6 = new Date(yyyy, mm, dd + 3);

    let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()}-${date0.getDate()}(${week[date0.getDay()]})`;
    let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()}-${date1.getDate()}(${week[date1.getDay()]})`;
    let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()}-${date2.getDate()}(${week[date2.getDay()]})`;
    let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()}-${date3.getDate()}(${week[date3.getDay()]})`;
    let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()}-${date4.getDate()}(${week[date4.getDay()]})`;
    let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()}-${date5.getDate()}(${week[date5.getDay()]})`;
    let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()}-${date6.getDate()}(${week[date6.getDay()]})`;

    $(".date0").html(sel_date0);
    $(".date1").html(sel_date1);
    $(".date2").html(sel_date2);
    $(".date3").html(sel_date3);
    $(".date4").html(sel_date4);
    $(".date5").html(sel_date5);
    $(".date6").html(sel_date6);
}

$(() => {
    $(".code").on('click', () => {
        $("#modal_input_code_wrap").fadeIn();
    })
    $(".input_ok").on('click', () => {
        $("#modal_input_code_wrap").fadeOut();
    })
    $(".close").on('click', () => {
        $("#modal_input_code_wrap").fadeOut();
    })




    // $(".img").on('click', () => {
    //     $(".img").css("display","none");
    //     $(".img2").css("display","block");
    //     $("#modal_totP_wrap").fadeIn();
    //     $("#modal_totP_wrap").css("position", "fixed");
    //     $("#modal_totP_wrap").css("bottom", "10px");
    // })
    // $(".img2").on('click', () => {
    //     $(".img2").css("display","none");
    //     $(".img").css("display","block");
    //     $("#modal_totP_wrap").fadeOut();
    // })
    // $(".close").on('click', () => {
    //     $(".img2").css("display","none");
    //     $(".img").css("display","block");
    //     $("#modal_totP_wrap").fadeOut();
    // })



});



