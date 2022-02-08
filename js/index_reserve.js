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

        // 도착지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display" : "inline-block"});
        $(".arrive_up_img").css({"display" : "none"});
        $('.arrive_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })

    // 옵션 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").addClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(145, 0, 70)" });
        $(".go_down_img2").css({ "display": "none" });
        $(".go_up_img2").css({ "display": "inline-block" });
        $(".go_layer2").slideDown("fast");

        // 도착지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({"color" : "rgb(0, 0, 0)"});
        $(".arrive_down_img2").css({"display" : "inline-block"});
        $(".arrive_up_img2").css({"display" : "none"});
        $('.arrive_layer2').slideUp(50);

        // 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);
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
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })

    // 옵션 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").addClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(145, 0, 70)" });
        $(".arrive_down_img2").css({ "display": "none" });
        $(".arrive_up_img2").css({ "display": "inline-block" });
        $(".arrive_layer2").slideDown("fast");

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img2").css({"display" : "inline-block"});
        $(".go_up_img2").css({"display" : "none"});
        $('.go_layer2').slideUp(50);

        // 다구간 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);
    })
})

// 화면 클릭
$(() => {
    $("#wrap").on('click', function (e) {
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);
        
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display" : "inline-block"});
        $(".arrive_up_img").css({"display" : "none"});
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })
})
