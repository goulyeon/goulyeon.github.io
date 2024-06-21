$(function(){

    $(window).resize(function(){
        var windowW=$(window).width();
        if(windowW<768){
            $('header').removeClass('center');
        }else{
            $('header').addClass('center');
        }
    }).resize();

    //메뉴 네비게이션 드롭다운
    $(window).resize(function(){
        var windowW=$(window).width();
        $('.gnb ul, .gnb').removeAttr('style');
        $('.gnb a').removeClass('active');
        $('.gnb > li').off('mouseenter');
        $('.gnb > li > a').off('active');
        $('.gnb').off('mouseleave');

        if(windowW>768){
            console.log('pc');
            $('.gnb > li').on('mouseenter',function(){
                $('.gnb > li > a').removeClass('active');
                $(this).children('a').addClass('active');
                $('.gnb ul, .depth2-bg').stop().slideDown();
            });
            $('.gnb').on('mouseleave',function(){
                $('.gnb > li > a').removeClass('active');
                $('.gnb ul, .depth2-bg').stop().slideUp();
            })
        }else{
            console.log('930이하')
            $('.gnb > li > a').on('click',function(){
                $('.gnb > li > a').removeClass('active');
                $(this).addClass('active');
                $('.gnb ul').stop().slideUp();
                $(this).next().stop().slideDown();
            });
        }    
    }).resize();

    // 모바일 네비게이션
    $('.btn-menu').click(function(){
        $('.nav-m-bg').toggle();
    })

    // 메인슬라이드
    var setting={
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        }
    }
    var swiper = new Swiper('.swiper-container', setting);



    // 공지사항
    var play=setInterval(move, 3000);
    function move(){
        $('.bar .on .wrap ul').animate({
            'margin-top':-60
        },function(){
            $('.bar .on .wrap ul li').first().appendTo('.bar .on .wrap ul');
            $('.bar .on .wrap ul').css('margin-top', 0); 
        })
    }

    $(window).resize(function(e){
        e.preventDefault();
        var windowW=$(window).width();  
        $('.bar .bars').off('mouseenter mouseleave');
        if(windowW<768){
            $('.bar .bars').removeAttr('style');
            clearInterval(play);
        }else{
            clearInterval(play);
            play=setInterval(move, 2000);
            $('.bar .bars').on({
                mouseenter:function(){
                    if(!$(this).hasClass('on')){ //on이 있으면 마우스 올렸을 때 롤링이 일단 멈춰야함.
                        //on이 없는 거에 마우스 올리면 일단 펼져진다음(on을 준다음) 롤링이 멈췄다가 마우스를 떼었을 때 플레이 되어야함.
                        $('.bar .bars').removeClass('on');

                        $(this).addClass('on');                        
                    }
                    clearInterval(play);
                },
                mouseleave:function(){
                    if($(this).hasClass('on')){ //on이 있는 곳에서 마우스를 떼면 롤링되어야 함
                        clearInterval(play);
                        play=setInterval(move, 2000);
                    }
                }
            })
        }
    }).resize();    


    // 위로가기
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        console.log(scrollTop); 
        
        if(scrollTop>100){
            $('.quick').addClass('on');
        }else{
            $('.quick').removeClass('on');
        }

        var cardTop=$('.card').offset().top-30;
        if(scrollTop>cardTop){
            $('.quick').addClass('bottom');
        }else{
            $('.quick').removeClass('bottom');
        }
    }).scroll();

    //위로가기 버튼을 누르면 가장 상위로 스크롤 이동
    $('.quick div').click(function(){
        $('html, body').stop(true).animate({
            scrollTop:0
        })
    })







})