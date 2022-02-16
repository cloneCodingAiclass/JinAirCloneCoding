//person-layer
$(() => {
    $(".person_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").addClass('close');
        $(".person_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".person_down_img").css({ "display": "none" });
        $(".person_up_img").css({ "display": "inline-block" });
        $(".person_pop_layer").slideDown("fast");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })

    // // 완료버튼
    // $(".submit_btn > button").on('click', function (e) {
    //     e.stopPropagation();
    //     $(".person_layerbtn").removeClass('close');
    //     $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".person_down_img").css({ "display": "inline-block" });
    //     $(".person_up_img").css({ "display": "none" });
    //     $('.person_pop_layer').slideUp(50);

    //     // 예약 관련 레이어 닫기
    //     e.stopPropagation();
    //     $(".go_layerbtn").removeClass('close');
    //     $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".go_down_img").css({ "display": "inline-block" });
    //     $(".go_up_img").css({ "display": "none" });
    //     $('.go_layer').slideUp(50);

    //     e.stopPropagation();
    //     $(".go_layerbtn2").removeClass('close');
    //     $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
    //     $(".go_down_img2").css({ "display": "inline-block" });
    //     $(".go_up_img2").css({ "display": "none" });
    //     $('.go_layer2').slideUp(50);

    //     e.stopPropagation();
    //     $(".arrive_layerbtn").removeClass('close');
    //     $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".arrive_down_img").css({ "display": "inline-block" });
    //     $(".arrive_up_img").css({ "display": "none" });
    //     $('.arrive_layer').slideUp(50);

    //     e.stopPropagation();
    //     $(".arrive_layerbtn2").removeClass('close');
    //     $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
    //     $(".arrive_down_img2").css({ "display": "inline-block" });
    //     $(".arrive_up_img2").css({ "display": "none" });
    //     $('.arrive_layer2').slideUp(50);
    // })
    // $("#wrap").on('click', function (e) {
    //     e.stopPropagation();
    //     $(".person_layerbtn").removeClass('close');
    //     $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".person_down_img").css({ "display": "inline-block" });
    //     $(".person_up_img").css({ "display": "none" });
    //     $('.person_pop_layer').slideUp(50);
    // })
})

// go-layer
$(() => {
    // 옵션1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").addClass('close');
        $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".go_down_img").css({ "display": "none" });
        $(".go_up_img").css({ "display": "inline-block" });
        $(".go_layer").slideDown("fast");

        // 도착지1 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })

})

// arrive-layer
$(() => {
    // 옵션 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").addClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".arrive_down_img").css({ "display": "none" });
        $(".arrive_up_img").css({ "display": "inline-block" });
        $(".arrive_layer").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })

})

// 화면 클릭
$(() => {
    $("#wrap").on('click', function (e) {
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })
})


        
function fnSetPaxCountDown(strPaxType,obj) {
	var btnParent = $(obj).parents("ul");

	var //
		iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
		iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
		iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
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

function fnSetPaxCountUp(strPaxType,obj) {
	var btnParent = $(obj).parents("ul");

	var //
		iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
		iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
		iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
		iPaxCount = iAdultCount + iChildCount;

	// Count 증감
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
            if(iInfantCount > iAdultCount){
                alert('소아는 성인을 넘을 수 없음')
                break;
            }
			$("strong[name=infantPaxCnt]").text(iInfantCount);
			break;
	}

}

function submit(){

    iAdultCount = parseInt($('.person_pop_layer').find('strong[name=adultPaxCnt]').text()),
    iChildCount = parseInt($('.person_pop_layer').find('strong[name=childPaxCnt]').text()),
    iInfantCount = parseInt($('.person_pop_layer').find('strong[name=infantPaxCnt]').text())
    
    if(iAdultCount > 0 && iChildCount > 0 && iInfantCount >0){
        $("strong[name=person_num]").text('성인 '+iAdultCount+' 유아 '+iChildCount+' 소아 '+iInfantCount);
    }else if(iAdultCount > 0 && iChildCount > 0){
        $("strong[name=person_num]").text('성인 '+iAdultCount+' 유아 '+iChildCount);
    }else if(iAdultCount > 0 && iInfantCount >0){
        $("strong[name=person_num]").text('성인 '+iAdultCount+' 소아 '+iInfantCount);
    }else if(iAdultCount > 0){
        $("strong[name=person_num]").text('성인 '+iAdultCount);
    }else if(iChildCount > 0){
        $("strong[name=person_num]").text('유아 '+iChildCount);
    }

    $(".person_layerbtn").removeClass('close');
    $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    $(".person_down_img").css({ "display": "inline-block" });
    $(".person_up_img").css({ "display": "none" });
    $('.person_pop_layer').slideUp(50);
}


$(function () {
    $('.infant_modal').hide();
    $('.baby_info_btn').click(function(){
        $('.child_modal').hide();
        $('.infant_modal').fadeIn(200);
        $('.infant_modal').click(function(){
            $('.infant_modal').fadeOut(200);
        })
    });

    $('.child_modal').hide();
    $('.child_info_btn').click(function(){
        $('.infant_modal').hide();
        $('.child_modal').fadeIn(200);
        $('.child_modal').click(function(){
            $('.child_modal').fadeOut(200);
        })
    });
})