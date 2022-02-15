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
    $('.policy_box').hide();
    $('.btnTypeB').click(function(){
        $('.policy_box').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_agree').click(function(){
            $('.policy_box').fadeOut(200);
            $('body').css('overflow', '');
        })
    })

});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

//공통 레이어팝업
function showPopupLayer(popSrc){
	top._showPopupLayer(popSrc);
}

var POPUP_INIT_ID = 111;
var _popupLayerID = POPUP_INIT_ID;
function _showPopupLayer(popSrc) {
	var $focus = $(document).find(":focus");//접근성 보완
	$focus.addClass("focused");//접근성 보완
	if($(".bgLayer2").is(":visible")){
		$(".bgLayer").css("z-index", "113");
	} else {
		$(".bgLayer").css("z-index", "100");
	}
	_popupLayerID += 2;
	var popTop = $(window).height() / 2 + $(document).scrollTop();
	var popSrcUrl = popSrc;
	/*var popWidth = $(window).width() - 100;
	if(popWidth > 1160){
		popWidth = 1160;
	}
	var marginLeft = popWidth / 2;*/
	if(popSrcUrl.indexOf("?") > 0){
		popSrcUrl += '&layerId='+ _popupLayerID
	}else {
		popSrcUrl += '?layerId='+ _popupLayerID
	}
	$("#wrapper").append(
		'<div class="popLayer" id="popLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';top:' + popTop + 'px;">'
		+ ' <iframe src="' + popSrcUrl +'" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayer' + (_popupLayerID) + '"></iframe>'
		+ ' <p class="close"><a href="#" onclick="hidePopupLayer(); return false"><span>닫기</span></a></p>'
		+ '</div>'
	);

	$(".bgLayer").css({"height": $(document).height() + "px", 'z-index': _popupLayerID }).show();
	$("#popLayer" + _popupLayerID).show();
	$("#iframePopLayer" + (_popupLayerID)).focus();
	$("html").css("overflow", "hidden");
}