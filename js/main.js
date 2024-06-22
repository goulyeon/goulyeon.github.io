$(document).ready(function(){

    //AOS
    AOS.init({
        duration: 2000,
    });

    // 스와이퍼 슬라이드
    var swiper = new Swiper(".mySwiper", {
        loop : true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 별 반짝이는 효과
    function stars(){

        const count = 80;
        const section = document.querySelector('.home');
        var i = 0;

        while (i < count){
            const star = document.createElement('i');
            const x = Math.floor(Math.random() * window.innerWidth)
            const y = Math.floor(Math.random() * window.innerHeight)

            const size = Math.random() * 4;
            star.style.left = x+'px';
            star.style.top = y+'px';
            star.style.width = 1+size+'px';
            star.style.height = 1+size+'px';

            const duration = Math.random() * 4;

            star.style.animationDuration = 2+duration+'s';
            star.style.animationDelay = duration+'s';


            section.appendChild(star);
            i++

        }
    }
    stars();

    // 메뉴 클릭시 이동,스타일변경
    $(".center .gnb ul li").click(function(){

        
        var gnbIndex = $(this).index();

        $('html,body').animate({
            scrollTop:$('section').eq(gnbIndex).offset().top
        },100);

    });



    $(window).scroll(function() {

        // 스크롤 시 메뉴 컬러변경
        var scrollH = $(window).scrollTop();
        var aboutTop = $('.about').offset().top;
        
        if (scrollH >= aboutTop) {
            $('header').addClass('active');

        } else {
            $('header').removeClass('active');
        }

        // 스크롤 시 위치에 따라 메뉴 스타일변경
        if (scrollH >= $('.home').offset().top){
            $(".center .gnb ul li").removeClass("on");
            $(".center .gnb ul li").eq(0).addClass("on");
            
            $(".menu-mo .gnb ul li").removeClass("on");
            $(".menu-mo .gnb ul li").eq(0).addClass("on");
        }
        if (scrollH >= $('.about').offset().top){
            $(".center .gnb ul li").removeClass("on");
            $(".center .gnb ul li").eq(1).addClass("on");
            
            $(".menu-mo .gnb ul li").removeClass("on");
            $(".menu-mo .gnb ul li").eq(1).addClass("on");

        }
        if (scrollH >= $('.portfolio').offset().top){
            $(".center .gnb ul li").removeClass("on");
            $(".center .gnb ul li").eq(2).addClass("on");
            
            $(".menu-mo .gnb ul li").removeClass("on");
            $(".menu-mo .gnb ul li").eq(2).addClass("on");
        }
        if (scrollH >= $('.contact').offset().top){
            $(".center .gnb ul li").removeClass("on");
            $(".center .gnb ul li").eq(3).addClass("on");
            
            $(".menu-mo .gnb ul li").removeClass("on");
            $(".menu-mo .gnb ul li").eq(3).addClass("on");
        }

    });


    $(".menu-mo .gnb .menu").click(function(){
        $(".menu-mo").addClass("on")
    });
    $(".menu-mo .gnb .close").click(function(){
        $(".menu-mo").removeClass("on")
    });
    

    // 메뉴 클릭시 이동,스타일변경 mo
    $(".menu-mo .gnb ul li").click(function(){

        var gnbIndex = $(this).index();

        $('html,body').animate({
            scrollTop:$('section').eq(gnbIndex).offset().top
        },100);

    });



});

