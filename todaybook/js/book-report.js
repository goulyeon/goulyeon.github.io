$(function(){
    var liWidth;
    var numberLiWidth;
    $(window).resize(function(){
        sizeUpdate();
    }).resize();

    //드롭다운할때마다 크기 계산 업데이트
    function sizeUpdate(){
        $('.font li').width($('.font-wrap').width());
        $('.font-num li').width($('.num-wrap').width());
        liWidth=$('li').width();
        numberLiWidth=$('li').width();
        $('.font ul').width(liWidth*3);
        $('.font-num ul').width(numberLiWidth*6);
    }
    // 폰트스타일 슬라이드 함수
    function move1(){
        $('.font ul').animate({
            'margin-left':-liWidth
        },function(){
            $('.font ul li').first().appendTo('.wrap ul');
            $('.font ul').css('margin-left',0);
        })
    }
    // 폰트크기 슬라이드 함수
    function move(){
        $('.font-num ul').animate({
            'margin-left':-numberLiWidth
        },function(){
            $('.font-num ul li').first().appendTo('.font-number ul');
            $('.font-num ul').css('margin-left',0);
        })
    }
    // 폰트스타일 슬라이드
    $('.font button').click(function(){
        if($(this).attr('id')=='next'){
            console.log('next');
            move1();
        }else{
            $('.font ul').css('margin-left',-liWidth);
            $('.font ul li').last().prependTo('.wrap1 ul');
            $('.font ul').animate({'margin-left':0});
        }
    })

    // 폰트크기 슬라이드
    $('.font-num button').click(function(){
        if($(this).attr('id')=='next2'){
            console.log('next2');
            move();
        }else{
            $('.font-num ul').css('margin-left',-numberLiWidth);
            $('.font-num ul li').last().prependTo('.font-num ul');
            $('.font-num ul').animate({'margin-left':0});
        }
    })
    
    //드롭다운
    $('.tab-menu ul a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $('.bottom-tab .tab').stop(true).slideUp();
            $('.tab-menu ul a').removeClass('active');
        }else{
            $('.tab-menu ul a').removeClass('active');
            $(this).addClass('active');
            var id=$(this).attr('href');
            $('.bottom-tab .tab').slideUp(500); 
            $(id).delay(500).stop(true).slideDown(function(){
                sizeUpdate();
            });
        }
    })

    $('html').click(function(e){
        var tab = $(".tab-menu ul a");
        var bottomTab = $(".bottom-tab .tab");
        if (!tab.is(e.target) && tab.has(e.target).length === 0){
            if (!bottomTab.is(e.target) && bottomTab.has(e.target).length === 0){
                $('.bottom-tab .tab').stop(true).slideUp();
                $('.tab-menu ul a').removeClass('active');
            }	
        }
    });
        

    // 배경색&글자색 바꾸기  
    $('.bg-color div span').click(function(){
        var id=$(this).css('backgroundColor');
        if($(this).attr('id')== 'color5'){
            $('body').css('background',id);
            $('body p').css('color','#fff');
        }else if($(this).attr('id')== 'color6'){
            $('body').css('background',id);
            $('body p').css('color','#fff');
        }else{
            $('body').css('background',id);
            $('body p').css('color','#000');
        }
    })
})