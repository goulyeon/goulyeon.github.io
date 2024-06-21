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
    autoplay: { 
        delay: 2000,
    },
    slidesPerView: 1.3,
    spaceBetween: 20,
    
    breakpoints: {
        767: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3.3,
            spaceBetween: 20
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


// 시설안내
// $(".info .name li").on("click",function(){
//     i = $(this).index();
//     // 리스트
//     $(".info .name li").removeClass("on");
//     $(this).addClass("on")
//     // console.log(i)
//     // 박스
//     $(".info .box li").removeClass("on");
//     $(".info .box li").eq(i).addClass("on");
//     // 배경
//     j = i*-700+"px";
//     $(".info .bg ul").stop().animate({"top":j});
// });

//메뉴 네비게이션 드롭다운
$(window).resize(function(){
    var windowW=$(window).width();
    
    if(windowW>767){
        console.log('pc,tab');
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

    }else{
        console.log('930이하');
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
            j = i*-400+"px";
            $(".info .bg ul").stop().animate({"top":j});
        });

    }    
}).resize();



// 행사갤러리 탭메뉴
$(".gallery .tab_menu li").on("click",function(){
    i = $(this).index();
    $(".gallery .tab_menu li").removeClass("on");
    $(this).addClass("on");
    $(".gallery .wrap .box").removeClass("on")
    $(".gallery .wrap .box").eq(i).addClass("on")
});


// 메뉴
$("#header .menu").on("click",function(){
    $(this).toggleClass("on");
    $("#header ul").toggleClass("on");
});


// 위로가기
$( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '.top_bt' ).fadeIn();
    } else {
      $( '.top_bt' ).fadeOut();
    }
});
$( '.top_bt' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
});












});