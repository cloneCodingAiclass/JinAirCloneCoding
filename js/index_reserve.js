// go-layer
$(() => {
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").addClass('close');
        $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".go_down_img").css({ "display": "none" });
        $(".go_up_img").css({ "display": "inline-block" });
        $(".go_layer").slideDown("fast");

        // 도착지 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display" : "inline-block"});
        $(".arrive_up_img").css({"display" : "none"});
        $('.arrive_layer').slideUp(50);
    })
    $(".close").on('click', function(e){
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);
    })
    $("#wrap").on('click', function (e) {
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);
    })
})

// arrive-layer
$(() => {
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").addClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".arrive_down_img").css({ "display": "none" });
        $(".arrive_up_img").css({ "display": "inline-block" });
        $(".arrive_layer").slideDown("fast");

        // 출발지 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".go_down_img").css({"display" : "inline-block"});
        $(".go_up_img").css({"display" : "none"});
        $('.go_layer').slideUp(50);
    })
    $(".close").on('click', function(e){
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);
    })
    $("#wrap").on('click', function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color" : "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display" : "inline-block"});
        $(".arrive_up_img").css({"display" : "none"});
        $('.arrive_layer').slideUp(50);
    })
})