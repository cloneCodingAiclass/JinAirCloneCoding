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
    $('.infoboxli1').click(function () {
        $('.infoboxli1').css('background-color', '#661E43');
        $('.infoboxli1').css('color', 'white');
        $('.infoboxli2').css('background-color', 'white');
        $('.infoboxli2').css('color', 'black');
        $('.bbsbox2').css('display', 'none');
        $('.bbsbox1').css('display', 'block');
    });
    $('.infoboxli2').click(function () {
        $('.infoboxli2').css('background-color', '#661E43');
        $('.infoboxli2').css('color', 'white');
        $('.infoboxli1').css('background-color', 'white');
        $('.infoboxli1').css('color', 'black');
        $('.bbsbox1').css('display', 'none');
        $('.bbsbox2').css('display', 'block');
    });

    /* ????????? ?????? */
    $('.reser_change_btn').click(function () {
        $('.reser_change').css('display', 'flex');
        $('.reser_change').fadeIn(200);
        $('.change_ticket').click(function () {
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if (!tripcheck || !peoplecheck) {
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function () {
                    $('.false_modal').css('display', 'none');
                });
            } else {
                alert('????????????');

            }
            $('.btn_cancel').click(function () {
                $('.reser_change').hide();
            })
        });
    });
    /* ????????? ?????? */
    $('.reser_cancel_btn').click(function () {
        $('.reser_cancel').css('display', 'flex');
        $('.reser_cancel').fadeIn(200);
        $('.next_ticket').click(function () {
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if (!tripcheck || !peoplecheck) {
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function () {
                    $('.false_modal').css('display', 'none');
                });
            } else {
                location.href = '/UserPage/payment/cancel_booking.html'
            }
        });
    });

    /* ??????????????? */
    $('.sub_service_btn').click(function () {
        $('.sub_service').css('display', 'flex');
        $('.sub_service').fadeIn(200);
    })
    $('.add_service').click(function () {
        location.href = "/UserPage/payment/extras.html";
    })
    $('.cancel_service').click(function () {
        location.href = "/UserPage/index/mypage/Mypage_cancel_service.html";
    })
    /* ?????? ?????? */
    $('.btn_cancel').click(function () {
        $('.reser_change').hide();
        $('.sub_service').hide();
        $('.reser_cancel').hide();
        $('.trip_modal').hide();
        $('.curr_info').hide();
    })
    /* ?????? ???????????? ?????? ??????*/
    $('.peopleAll').click(function () {
        let checked = $('.peopleAll').is(':checked');

        if (checked) {
            $('.people_name').prop('checked', true);
        }
        else {
            $('.people_name').prop('checked', false);
        }
    });
    $('.tripAll').click(function () {
        let checked = $('.tripAll').is(':checked');
        if (checked) {
            $('.trip_name').prop('checked', true);
        }
        else {
            $('.trip_name').prop('checked', false);
        }
    });

    /* ???????????? ?????? */
    $('.trip_btn').click(function () {
        $('.trip_modal').css('display', 'flex');
        $('.trip_modal').fadeIn(200);

        $('.confirm_btn').click(function () {
            $('.trip_false_modal').hide();
            let check1 = $('.check1').is(':checked');
            let check2 = $('.check2').is(':checked');

            if (!check1 || !check2) {
                $('.trip_false_modal').css('display', 'flex');
                $('.confirm_btn').click(function () {
                    $('.trip_false_modal').hide();
                });
            } else {
                location.href = "https://ec.aceinsurance.co.kr/"
            }
        })
    });

    /* ?????????????????? */
    $('.curr_btn').click(function () {
        $('.curr_info').css('display', 'flex');
        $('.curr_info').fadeIn(200);
    });

});


function hidePopupLayer() {
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

// ?????? ?????? ??? ***********************
$(() => {
    $(".modal_edit_close_btn").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "none");
        $("body").css("overflow", "");
    });
});

$(() => {
    $("#round").on("click", function () {
        $(".round_wrap").css("display", "block");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#oneway").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "block");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#multi").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "block");
        $(".edit_jour_wrap").css("height", "520px");
    });
});

//person-layer
$(() => {
    $(".person_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".person_down_img").css({ display: "none" });
        $(".person_up_img").css({ display: "inline-block" });
        $(".person_pop_layer").slideDown("fast");

        // ?????? ?????? ????????? ??????
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img").css({ display: "inline-block" });
        $(".go_up_img").css({ display: "none" });
        $(".go_layer").slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ display: "inline-block" });
        $(".go_up_img2").css({ display: "none" });
        $(".go_layer2").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_up_img").css({ display: "none" });
        $(".arrive_layer").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ display: "inline-block" });
        $(".arrive_up_img2").css({ display: "none" });
        $(".arrive_layer2").slideUp(50);
    });
});

// go-layer
$(() => {
    // ??????1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();

        $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt").addClass("on");
        $(".go_layer").slideDown("fast");

        // ?????? ??? ?????? ??????
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // ?????????1 ????????? ??????
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        // ????????? ??????2 ??????
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // ?????? 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt2").addClass("on");
        $(".go_layer2").slideDown("fast");

        // ?????? ??? ?????? ??????
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // ?????????2 ????????? ??????
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);

        // ??????1 ??????
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
});

// arrive-layer
$(() => {
    // ?????? 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt").addClass("on");
        $(".arrive_layer").slideDown("fast");

        // ?????? ??? ?????? ??????
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // ?????????1 ????????? ??????
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // ????????? ??????2 ??????
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // ?????? 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt2").addClass("on");
        $(".arrive_layer2").slideDown("fast");

        // ?????? ??? ?????? ??????
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // ?????????2 ????????? ??????
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        // ????????? ??????1 ??????
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
    $(".person_pop_layer").on("click", function (e) {
        e.stopPropagation();
    });
});

// ?????? ??????
$(() => {
    $("body").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // ?????? ??? ?????? ??????
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });
});

function fnSetPaxCountDown(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt(
            $(btnParent).find("strong[name=adultPaxCnt]").text()
        ),
        iChildCount = parseInt(
            $(btnParent).find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(btnParent).find("strong[name=infantPaxCnt]").text()
        ),
        iPaxCount = iAdultCount + iChildCount;

    switch (strPaxType) {
        case "ADULT":
            --iAdultCount;
            if (iAdultCount >= 0) {
                --iPaxCount;
            }

            if (iInfantCount > iAdultCount) {
                iInfantCount = iAdultCount;
            }

            if (iAdultCount <= 0) {
                iAdultCount = 0;
                iInfantCount = 0;
            }
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
        case "CHILD":
            --iChildCount;
            if (iChildCount >= 0) {
                --iPaxCount;
            }
            if (iChildCount <= 0) {
                iChildCount = 0;
            }

            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            --iInfantCount;
            if (iInfantCount <= 0) {
                iInfantCount = 0;
            }

            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function fnSetPaxCountUp(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt(
            $(btnParent).find("strong[name=adultPaxCnt]").text()
        ),
        iChildCount = parseInt(
            $(btnParent).find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(btnParent).find("strong[name=infantPaxCnt]").text()
        ),
        iPaxCount = iAdultCount + iChildCount;

    // Count ??????
    switch (strPaxType) {
        case "ADULT":
            ++iAdultCount;
            ++iPaxCount;
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            break;
        case "CHILD":
            ++iChildCount;
            ++iPaxCount;
            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            ++iInfantCount;
            if (iInfantCount > iAdultCount) {
                alert("????????? ????????? ?????? ??? ??????");
                break;
            }
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function submit() {
    console.log("??????");
    var iAdultCount = parseInt(
        $(".person_pop_layer").find("strong[name=adultPaxCnt]").text()
    ),
        iChildCount = parseInt(
            $(".person_pop_layer").find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(".person_pop_layer").find("strong[name=infantPaxCnt]").text()
        );

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "?????? " + iAdultCount + " ?????? " + iChildCount + " ?????? " + iInfantCount
        );
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text(
            "?????? " + iAdultCount + " ?????? " + iChildCount
        );
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "?????? " + iAdultCount + " ?????? " + iInfantCount
        );
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text("?????? " + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text("?????? " + iChildCount);
    }

    // ??????. ?????? ?????? ?????? ??? ??????, ??????, ????????? ?????? input:hidden??? ??????
    // ???????????? ?????? ?????? ?????? .adultPaxCnt??? default??? : 1??? ??????
    $(".adultPaxCnt").val(iAdultCount);
    $(".childPaxCnt").val(iChildCount);
    $(".infantPaxCnt").val(iInfantCount);

    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");
}

$(function () {
    $(".infant_modal").hide();
    $(".baby_info_btn").click(function () {
        $(".child_modal").hide();
        $(".infant_modal").fadeIn(200);
        $(".infant_modal").click(function () {
            $(".infant_modal").fadeOut(200);
        });
    });

    $(".child_modal").hide();
    $(".infant_modal").hide();
    $(".child_info_btn").click(function () {
        $(".child_modal").fadeIn(200);
        $(".child_modal").click(function () {
            $(".child_modal").fadeOut(200);
        });
    });
});

function comewhatday() {
    $(".whatday").html("?????????");
}
function gowhatday() {
    $(".whatday").html("?????????");
}

// ????????? ????????????
function gowhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// ????????? ????????????
function gowhatdayddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// ???????????? ????????????
function gowhatdaydddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
    $(".modal_container").fadeIn(200);
    $(".moditext").html("??????????????? ?????? ????????? ????????? ??? ????????????.");
}

function twochoice() {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
    // ??????, ?????? ????????? ??????
    $(".go_layer")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt").val(str);
            $(".go_layer").slideUp(50);
            $(".arrive_layer").slideDown(100);
            $(".go_select_opt").removeClass("on");
            $(".arrive_select_opt").addClass("on");
            bbb = "y";
        });
    // ??????, ?????? ????????? ??????
    $(".arrive_layer")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt").val(str);
            ccc = "y";
        });
    // ?????? ?????? ??????
    $(".go_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("?????????");
        d;
    });
    $(".come_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("?????????");
    });

    // ?????? ?????? ??????
    $(".go_date2").on("click", function () {
        $(".cal2").css({ display: "flex" });
        $(".whatday").html("?????????");
    });

    // ????????? ????????? ??????
    $(".go_layer2")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt2").val(str);
            $(".go_layer2").slideUp(50);
            $(".arrive_layer2").slideDown(100);
            $(".go_select_opt2").removeClass("on");
            $(".arrive_select_opt2").addClass("on");
            bbb = "y";
        });
    // ????????? ????????? ??????
    $(".arrive_layer2")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt2").val(str);
            ccc = "y";
        });
    // ?????????1 ?????? ??????
    $(".go_date3").on("click", function () {
        if (bbb == "n" && ccc == "n") {
            departure();
            $(".cal3").css({ display: "none" });
        } else if (bbb == "y" && ccc == "n") {
            arrive();
        } else {
            $(".cal3").css({ display: "flex" });
            $(".whatday").html("?????????");
        }
    });

    // ?????? X ??????
    $(".x_box").on("click", function () {
        $(".cal").css({ display: "none" });
        $(".cal2").css({ display: "none" });
        $(".cal3").css({ display: "none" });
    });

    // ???????????? ?????? ??????
    $(".btn_cancel").on("click", function () {
        $(".modal_container").fadeOut(200);
    });
});

