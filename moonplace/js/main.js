$(document).ready(function(){

// 자동 페이드인아웃
total = $("#visual ul li").length;
// console.log(total)
i = 0;

start();
function start(){
    timer = setInterval(function(){
        if(i == total-1){
            i = 0;
        }else{
            i++;
        }
        $("#visual ul li").fadeOut();
        $("#visual ul li").eq(i).fadeIn(1500);
    },5000);
}

// 일정안내 스와이퍼슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// 시설안내
$(".info .name li").on("click",function(){
    i = $(this).index();
    // 리스트
    $(".info .name li").removeClass("on");
    $(this).addClass("on")
    // console.log(i)
    // 박스
    $(".info .box li").removeClass("on");
    $(".info .box li").eq(i).addClass("on");
    // 배경
    j = i*-700+"px";
    $(".info .bg ul").stop().animate({"top":j});
});

// 행사갤러리 탭메뉴
$(".gallery .tab_menu li").on("click",function(){
    i = $(this).index();
    $(".gallery .tab_menu li").removeClass("on");
    $(this).addClass("on");
    $(".gallery .wrap .box").removeClass("on")
    $(".gallery .wrap .box").eq(i).addClass("on")
});


//이용안내
line = -200;
pos3 = $(".gallery").offset().top+line;
pos4 = $(".about").offset().top+line;

$(window).on("scroll",function(){
    scroll = $(this).scrollTop();


});



















});