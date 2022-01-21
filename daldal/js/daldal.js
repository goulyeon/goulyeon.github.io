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
    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        }
    },
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
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



// ---------- 모바일 ----------

// 메뉴 토글
$('header .mo .open .gnb .depth-1 .name-wrap img').click(function(){
    $('header .mo .open .gnb .depth-1').removeClass('on');
    $('header .mo .open .gnb .depth-1 .depth-2').slideUp();
    $(this).parents('.depth-1').addClass('on');
    $(this).parents('.name-wrap').siblings('.depth-2').slideDown();
});

// 메뉴 닫기
$('header .mo .close').click(function(){
    $(this).parents('.open').animate({'right':'-100%'});
    $('.open-bg').fadeOut();
});

// 메뉴 열기
$('header .mo .bar').click(function(){
    $(this).siblings('.open').animate({'right':'0'})
    $('.open-bg').fadeIn();
});












});