$(document).ready(function(){


// 메인 슬라이드
var swiper = new Swiper(".main-Swiper", {
    effect : 'fade',
    pagination: {
      el: ".main-slide .swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    }
});


// 메뉴 슬라이드
var swiper = new Swiper(".menu-Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".menu .swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    }
});

// 카드 슬라이드
var swiper = new Swiper(".cardSwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    }
});

// 위로가기
$(window).scroll(function(){
    if($(this).scrollTop() > 200) {
        $('.top-bt').fadeIn();
    }else{
        $('.top-bt').fadeOut();
    }
});
$('.top-bt').click(function(){
    $('html, body').animate({scrollTop : 0},400);
    return false;
});





















});