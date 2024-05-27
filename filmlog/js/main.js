$(document).ready(function(){

    var titArray = []; //슬라이드 타이틀
    $('.slider .slide_tit > li h4').each(function(index, item) {
        var txt = $(this).text();
        titArray.push(txt);
    }).promise().done(function() {
        //슬라이드 전체 페이지 번호
        var num = $(".slider .num");
        var slides = $(".slider .swiper-slide");
        var slideCount = slides.length;
        num.html(`<strong>1</strong> / ${slideCount}`);
    });

    var textArray = []; //슬라이드 타이틀
    $('.slider .slide_tit > li p').each(function(index, item) {
        var txt = $(this).text();
        textArray.push(txt);
    }).promise().done(function() {
        //슬라이드 전체 페이지 번호
        var num = $(".slider .num");
        var slides = $(".slider .swiper-slide");
        var slideCount = slides.length;
        num.html(`<strong>1</strong> / ${slideCount}`);
    });

    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
            },
            next: {
                shadow: true,
                translate: ["120%", 0, -500],
            },
        },
        loop: true,
        speed : 1500,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },


        pagination: {
            el: '.slider .slide_tit',
            clickable: 'true',
            type: 'bullets',
            renderBullet: (index, className) => {
                return `<li class=${className}><h4>${titArray[index]}</h4><p>${textArray[index]}</p><span class="bar"></span></li>`;
            },
        },


    });








});

