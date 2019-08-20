$(function(){
    // 검색창 열기
    $('header .icon-search').click(function(){
        $('.search').show();
    })
    // 검색창 닫기
    $('.search .icon-back').click(function(){
        $('.search').hide();
    })
    // 검색결과 보여주기
    $('.search .icon-search').click(function(){
        $('.tab-contents').show();
    })
    // 검색 탭메뉴
    $('.tab-nav a').click(function(e){
        $('.tab-nav a').removeClass('active'); 
        $(this).addClass('active'); 
        var id=$(this).attr('href');
        
        $('.tab-contents>div').removeClass('active');      
        $(id).addClass('active');
    })

    // 풍선 띄우기
    $('.book-box div span p').click(function(){
        $('.balloon').show();
        $('.delet-box').show();
        $('.pen-box').hide();
        $('.memo').hide();
        $('.share').hide();
        $('.balloon').after('<div class="popup-bg"></div>');
        
    })
    // 풍선 지우기
    $('body').on('click','.popup-bg',function(){               
        $('.balloon').toggle();
        $('.popup-bg').remove();
    }); 
    // 풍선 -> 형광펜
    $('.balloon .delet-box #pen').click(function(){
        $('.delet-box').hide();
        $('.pen-box').show();
        $('.pen-box').after('<div class="popup-bg"></div>');
    })
    $('.pen-box .btn-y').click(function(){
        $('.book-box span p').css('background','#FFF4B3');
    })
    $('.pen-box .btn-p').click(function(){
        $('.book-box span p').css('background','#F9C0FF');
    })
    $('.pen-box .btn-g').click(function(){
        $('.book-box span p').css('background','#BDFFB6');
    })
    $('.pen-box .btn-b').click(function(){
        $('.book-box span p').css('background','#B6FFFB');
    })
    $('.pen-box .pen-text').click(function(){
        $('.book-box span p').css('background','none');
    })

    // 풍선 -> 메모
    $('.balloon .delet-box #memo').click(function(){
        $('.delet-box').hide();
        $('.memo').show();
        $('.memo').after('<div class="popup-bg"></div>');
    })

    // 풍선 -> 공유
    $('.balloon .delet-box #share').click(function(){
        $('.delet-box').hide();
        $('.share').show();
        $('.share').after('<div class="popup-bg"></div>');
    })

    // 풍선 -> 검색
    $('.balloon .delet-box #search').click(function(){
        $('.delet-box').hide();
        $('.search').show();
        $('.tab-contents').show();
        $('#star').val('별 하나에');
    })

    // 풍선 -> 삭제
    $('.balloon .delet-box #clear').click(function(){
        $('.delet-box').hide();
        $('.book-box span p').css('background','none');
    })

    // 듣기팝업
    $('.book-nav ul li .icon-play').click(function(){
        $('.play').show();
        $('.book-nav .progress-bar').hide();
        $('.book-box span p').css('background','none');
    })

    // 듣기 -> 닫기
    $('.play .bottom .icon-close-o').click(function(){
        $('.play').hide();
        $('.book-nav .progress-bar').show();
        $('.book-box span p').css('background','#FFF4B3');
    })

    //진짜듣기 
    $('.play .bottom #audio').click(function(){
        var audio=$('audio')[0];
        console.log(audio);
        if(audio.paused){
            audio.play();//재생
            $('.play .bottom #audio').removeClass('icon-play')
            $('.play .bottom #audio').addClass('icon-stop')
        }else{
            audio.pause();//일시정지
            $('.play .bottom #audio').removeClass('icon-stop')
            $('.play .bottom #audio').addClass('icon-play')
        }
        
    })


    // 듣기 -> 설정
    $('.play .bottom .icon-play-set').click(function(){
        $('.play-set').toggle();
    })

    $('.icon-plus').on('click', function(){
        $('.num').text(parseInt($('.num').text()) + 1)
    });

    $('.icon-minus').on('click', function(){
        $('.num').text(parseInt($('.num').text()) - 1)
    });

    $('button').on('click', function(){
        $('.num').text(1)
    });
        


    
    // 듣기 -> 알람
    $('.play .bottom .icon-play-alarm').click(function(){
        $('.alarm').show();
    })
    $('.alarm .icon-back').click(function(){
        $('.alarm').hide();
    })

    // 잠금
    $('.book-nav ul li .icon-look').click(function(){
        $('.look').show();
        $('.book-nav').hide();
        $('header').hide();
        $('.text').hide();
        $('.set').hide();
        $('.book-box span p').css('background','none');
    })
    // 잠금해제
    $('.look button').click(function(){
        $('.look').hide();
        $('.book-nav').show();
        $('header').show();
        $('.book-box span p').css('background','#FFF4B3');
    })  

    // 텍스트
    $('.book-nav ul #text').click(function(){
        if($(this).hasClass('active')){
            $('.book-nav ul li').removeClass('active');
        }else{
            $('.book-nav ul li').removeClass('active');
            $(this).addClass('active');    
        }    
        $('.text').toggle();
        $('.set').hide();
    })

    // 텍스트 배경
    $('.text .color label').click(function(){
        $('.text .color label').removeClass('active');
        $(this).addClass('active');
    })

    // 배경색 적용
    $('.text .color label').click(function(){
        var id=$(this).css('backgroundColor');
        if($(this).attr('id')== 'color5'){
            $('body').css('background',id);
            $('.book-box span').css('color','#fff');
        }else if($(this).attr('id')== 'color6'){
            $('body').css('background',id);
            $('.book-box span').css('color','#fff');
        }else{
            $('body').css('background',id);
            $('.book-box span').css('color','#000');
        }
    })


    // 텍스트 폰트
    function movet1(){
        $('.text .t1 ul').animate({
            'margin-left':'-60px'
        },function(){
            $('.text .t1 ul li').first().appendTo('.text .t1 ul');
            $('.text .t1 ul').css('margin-left',0);
        })
    }

    $('.text .t1 button').click(function(){
        if($(this).attr('class')=='icon icon-next'){//next
            console.log('next');
            movet1();
        }else{//prev
            console.log('prev');
            $('.text .t1 ul').css('margin-left','-60px');
            $('.text .t1 ul li').last().prependTo('.text .t1 ul');
            $('.text .t1 ul').animate({'margin-left':0})
        }
    })

    // 텍스트 크기
    function movet2(){
        $('.text .t2 ul').animate({
            'margin-left':'-60px'
        },function(){
            $('.text .t2 ul li').first().appendTo('.text .t2 ul');
            $('.text .t2 ul').css('margin-left',0);
        })
    }
    $('.text .t2 button').click(function(){
        if($(this).attr('class')=='icon icon-next'){//next
            console.log('next');
            movet2();
        }else{//prev
            console.log('prev');
            $('.text .t2 ul').css('margin-left','-60px');
            $('.text .t2 ul li').last().prependTo('.text .t2 ul');
            $('.text .t2 ul').animate({'margin-left':0})
        }
    })
    
    // 설정
    $('.book-nav ul #set').click(function(){        
        if($(this).hasClass('active')){
            $('.book-nav ul li').removeClass('active');
        }else{
            $('.book-nav ul li').removeClass('active');
            $(this).addClass('active');    
        }                
        $('.set').toggle();
        $('.text').hide();
    })

    $('.set li #box button').click(function(){
        $('.box').toggle();
    })
    $('.box li').click(function(){
        $('.box').toggle();
    })








    

})