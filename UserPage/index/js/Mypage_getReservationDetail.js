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
    $('.infoboxli1').click(function(){
        $('.infoboxli1').css('background-color', '#661E43');
        $('.infoboxli1').css('color', 'white');
        $('.infoboxli2').css('background-color', 'white');
        $('.infoboxli2').css('color', 'black');
        $('.bbsbox2').css('display', 'none');
        $('.bbsbox1').css('display', 'block');
    });
    $('.infoboxli2').click(function(){
        $('.infoboxli2').css('background-color', '#661E43');
        $('.infoboxli2').css('color', 'white');
        $('.infoboxli1').css('background-color', 'white');
        $('.infoboxli1').css('color', 'black');
        $('.bbsbox1').css('display', 'none');
        $('.bbsbox2').css('display', 'block');
    });

    /* 항공권 변경 */
    $('.reser_change_btn').click(function(){
        $('.reser_change').css('display', 'flex');
        $('.reser_change').fadeIn(200);
        $('.change_ticket').click(function(){
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if(!tripcheck || !peoplecheck){
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function(){
                    $('.false_modal').css('display', 'none');
                });
            }else{
                alert('넘어가자');

            }
            $('.btn_cancel').click(function(){
                $('.reser_change').hide();
            })
        });
    });
    /* 항공권 취소 */
    $('.reser_cancel_btn').click(function(){
        $('.reser_cancel').css('display', 'flex');
        $('.reser_cancel').fadeIn(200);
        $('.next_ticket').click(function(){
            let tripcheck = $('.trip_name').is(':checked');
            let peoplecheck = $('.people_name').is(':checked');

            if(!tripcheck || !peoplecheck){
                $('.false_modal').css('display', 'flex');
                $('.confirm_btn').click(function(){
                    $('.false_modal').css('display', 'none');
                });
            }else{
                location.href='/UserPage/payment/cancel_booking.html'
            }
        });
    });
    
    /* 부가서비스 */
    $('.sub_service_btn').click(function(){
        $('.sub_service').css('display', 'flex');
        $('.sub_service').fadeIn(200);
    })
    $('.add_service').click(function(){
        location.href="/UserPage/payment/extras.html";
    })
    $('.cancel_service').click(function(){
        location.href="/UserPage/index/mypage/Mypage_cancel_service.html";
    })
    /* 공통 버튼 */
    $('.btn_cancel').click(function(){
        $('.reser_change').hide();
        $('.sub_service').hide();
        $('.reser_cancel').hide();
        $('.trip_modal').hide();
        $('.curr_info').hide();
    })
    /* 모달 체크박스 전체 체크*/
    $('.peopleAll').click(function(){
        let checked = $('.peopleAll').is(':checked');

        if(checked){
            $('.people_name').prop('checked', true);
        }
        else{
            $('.people_name').prop('checked', false);
        }
    });
    $('.tripAll').click(function(){
        let checked = $('.tripAll').is(':checked');
        if(checked){
            $('.trip_name').prop('checked', true);
        }
        else{
            $('.trip_name').prop('checked', false);
        }
    });

    /* 여행가입 보험 */
    $('.trip_btn').click(function(){
        $('.trip_modal').css('display', 'flex');
        $('.trip_modal').fadeIn(200);

        $('.confirm_btn').click(function(){
            $('.trip_false_modal').hide();
        let check1 = $('.check1').is(':checked');
        let check2 = $('.check2').is(':checked');

        if(!check1 || !check2){
            $('.trip_false_modal').css('display', 'flex');
            $('.confirm_btn').click(function(){
                $('.trip_false_modal').hide();
            });
        }else{
            location.href="https://ec.aceinsurance.co.kr/"
        }
    })
    });

    /* 탑승현황보기 */
    $('.curr_btn').click(function(){
        $('.curr_info').css('display', 'flex');
        $('.curr_info').fadeIn(200);
    });

});


function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}