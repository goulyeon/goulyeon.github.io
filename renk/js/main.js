$(document).ready(function(){

// ------------------ header ------------------
// $("#header .menu").click(function(){
//     $("#header ul").slideToggle();
// });

$("#header .menu").click(function(){
    $(this).hide();
    $("#header .close").show();
    $("#header ul").slideDown();
});

$("#header .close").click(function(){
    $(this).hide();
    $("#header .menu").show();
    $("#header ul").slideUp();
});

// ------------------ visual ------------------
// 자동 슬라이드
total = $(".slider li").length;
i = 0;

start();
function start(){
    timer = setInterval(function(){
        if(i == total-1){
            i = 0;
        }else{
            i++;
        }
        $(".slider li").fadeOut();
        $(".slider li").eq(i).fadeIn();
        $(".navi li a").removeClass("on");
        $(".navi li").eq(i).children("a").addClass("on");
    },3000);
}
// 다음버튼
$("#visual .next").on("click",function(){
    clearInterval(timer);
    if(i == total-1){
        i = 0;
    }else{
        i++;
    }
    $(".slider li").fadeOut();
    $(".slider li").eq(i).fadeIn();
    $(".navi li a").removeClass("on");
    $(".navi li").eq(i).children("a").addClass("on");
    start();
});
// 이전버튼
$("#visual .prev").on("click",function(){
    clearInterval(timer);
    if(i == 0){
        i = total-1;
    }else{
        i--;
    }
    $(".slider li").fadeOut();
    $(".slider li").eq(i).fadeIn();
    $(".navi li a").removeClass("on");
    $(".navi li").eq(i).children("a").addClass("on");
    start();
});
// 네이게이션
$(".navi li a").on("click",function(){
    clearInterval(timer);
    i = $(this).parent("li").index();
    j = $(this).hasClass("on");
    if(j == true){
        $(".slider li").eq(i).fadeIn();
        $(".navi li a").removeClass("on");
        $(".navi li").eq(i).children("a").addClass("on");
        start();
    }else{
        $(".slider li").fadeOut();
        $(".slider li").eq(i).fadeIn();
        $(".navi li a").removeClass("on");
        $(".navi li").eq(i).children("a").addClass("on");
        start();
    }


});















});