$(function(){
    // 메인슬라이드 스와이퍼
    var total=$('.main-ad .swiper-slide').length;
    $('.pagenation-mo').text(1+' / '+total);
    var mainSwiper = new Swiper('.main-ad .swiper-container', {
        pagination: {
            el: '.main-ad .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                var name=['메종키츠네','파운데이션','클렌징오일','퍼스널쉐이드']
                return '<span class="' + className + '">' + (name[index]) + '</span>';
            },
        },
        on: {
            slideChange: function () {
            //   console.log('슬라이드 변경',swiper.realIndex+1, total);
            $('.pagenation-mo').text(mainSwiper.realIndex+1+' / '+total)
            }
        },
    });   

    //퀵메뉴 상태 변경 
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        console.log(scrollTop); 
        
        if(scrollTop>200){
            $('.quick').addClass('on');
        }else{
            $('.quick').removeClass('on');
        }

        var storeTop=$('.store').offset().top-200;
        if(scrollTop>storeTop){
            $('.quick').addClass('bottom');
        }else{
            $('.quick').removeClass('bottom');
        }

        console.log('스토어영역시작위치',storeTop);

    }).scroll();

    // 베스트 롤링
    function move(){
        $('.best-slide ul').animate({
            'margin-top':-168
        },function(){
            $('.best-slide ul li').first().appendTo('.best-slide ul');
            $('.best-slide ul').css('margin-top',0);
        })
    }

    

    // 베스트 페이지네이션
    $('.best-pc .pagination-pc button').click(function(){
        clearInterval(play);
        if($(this).attr('class')=='icon icon-up'){
            console.log('up');
            move();
        }else{
            console.log('down');
            $('.best-slide ul').css('margin-top',-168);
            $('.best-slide ul li').last().prependTo('.best-slide ul');
            $('.best-slide ul').animate({'margin-top':0})
        }
    });

    
    

//검색창
    //검색창 열기&검색창 열기 버튼의 아이콘 변경
    $('.icon-search').click(function(){
        $('.pop-search').fadeIn();
        $('.search').addClass('open');
        $('.search-tab').hide();
        $('.pop-search-bg').show();
    })

    //텍스트입력박스에 포커스가 발생되면 탭메뉴가 열린다.
    $('.search input').focus(function(){
        $('.search-tab').show();  
    })

    //최근검색어 삭제하기 
    $('.recent button').click(function(){
        $(this).parent().remove();
        var count=$('.recent li').length;
        console.log(count);                
        if(count==0){
            $('.recent').append('<p>최근검색어가 없습니다.</p>');  
        }else{
            $('.recent p').remove();
        }
    })

    //최근검색어의 키워드를 누르면 텍스트입력창에 키워드값 넣기
    $('.recent a').click(function(e){
        e.preventDefault();
        var keyword=$(this).text();
        $('.search input').val(keyword);
    })

    //팝업 배경 선택시 팝업창 닫기
    $('.pop-search-bg').click(function(){
        $('.pop-search').hide();
        $('.pop-search-bg').hide();
    })
    


// 매장 팝업
    $('.icon-store-open').click(function(){
        $('.pop-store').show();

    })
    $('.pop-store .icon-close-b').click(function(){
        // $('.popup, .popup-bg').hide();
        $('.pop-store').hide();
    })

    // 매장 카테고리
    var category={
        category0:{
            categoryName:'지역을 선택하세요.',
            result:['매장을 선택하세요.']
        },
        category2:{
            categoryName:'서울',
            result:['매장을 선택하세요.','현대 백화점 신촌점', '현대 백화점 코엑스점', '현대 백화점 천호점', '현대 백화점 목동점','롯데 백화점 스타시티점','롯데 백화점 강남점','롯데 백화점 청량리점','롯데 백화점 노원점','롯데 백화점 잠실점','롯데 백화점 본점','신세계 백화점 영등포점', '신세계 백화점 강남점', '신세계 백화점 본점', '갤러리아 백화점 압구정점']
        },
        category3:{
            categoryName:'경기',
            result:['매장을 선택하세요.','신세계 백화점 하남점', '현대 백화점 성남점', '현대 백화점 천호점', '현대 백화점 목동점','AK플라자 수원점','현대 백화점 중동','AK플라자 분당점','롯데 백화점 평촌점','현대 백화점 킨텍스점','신세계 백화점 의정부점','신세계 백화점 영등포점', '신세계 백화점 경기점', '롯데 백화점 중동점']
        },
        category4:{
            categoryName:'인천',
            result:['매장을 선택하세요.','롯데 백화점 인천터미널점']
        },
        category5:{
            categoryName:'대전',
            result:['매장을 선택하세요.','갤러리아 백화점 월드점']
        },
        category6:{
            categoryName:'광주',
            result:['매장을 선택하세요.','신세계 백화점 광주점']
        },
        category7:{
            categoryName:'전주',
            result:['매장을 선택하세요.','롯대 백화점 전주점']
        },
        category8:{
            categoryName:'대구',
            result:['매장을 선택하세요.','신세계 백화점 대구점', '롯데 백화점 대구점', '현대 백화점 대구점', '대구 백화점']
        },
        category9:{
            categoryName:'창원',
            result:['매장을 선택하세요.','롯대 백화점 창원점']
        },
        category10:{
            categoryName:'울산',
            result:['매장을 선택하세요.','롯대 백화점 울산점']
        },
        category11:{
            categoryName:'부산',
            result:['매장을 선택하세요.','신세계 백화점 센텀시티몰', '신세계 백화점 센텀시티점', '롯데 백화점 부산 본점', '롯대 백화점 센텀시티점']
        }
    }

    for(var key in category){
        $('.category').append('<option value="'+key+'">'+category[key].categoryName +'</option>');
    }
    
    //클래스가 category인 select에 값의 변화가 일어나면
    $('.category').change(function(){
        console.log('값이 변했다.'); 
        //select값이 변경될 때 내가 선택한 option의 value값을 획득한다. 
        var categoryName=$(this).val();//category1, category2, category3
        console.log(categoryName);      
        //기존에 있는 option을 비워준다.
        $('.category-result').empty();

        //카테고리의 값을 반복문을 돌릴때 넣어준다.          
        for(var i in category[categoryName]['result']){
            $('.category-result').append('<option>'+category[categoryName]['result'][i] +'</option>');
        }               
    })

// 매장 검색
    $('.pop-store .m-store button').click(function(){
        //아이디와 패스워드값이 남아있을 경우 제거
        $('.pop-store .wrap').show(function(){map();});
    })


    //지도
    function map(){
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = { 
                center: new kakao.maps.LatLng(37.556081, 126.935775), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(37.556081, 126.935775); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    //위로가기 버튼을 누르면 가장 상위로 스크롤 이동
    $('.quick button').click(function(){
        $('html, body').stop(true).animate({
            scrollTop:0
        })
    })

    // 검색팝업
    $('.lnb .icon-search-open').click(function(){
        $('.pop-msearch').show();
    })
    $('.pop-msearch .icon-close-b').click(function(){
        $('.pop-msearch').hide();
    })

    $('.search-tab button').click(function(){
        $(this).parent().remove();
        var count=$('.search-tab li').length;
        console.log(count);
        if(count==6){
            $('.search-tab').append('<p>최근검색어가 없습니다.</p>');
        }
    })

    $('.search-tab a').click(function(e){
        e.preventDefault();
        var keyword=$(this).text();
        $('.m-search input').val(keyword);
    })


    var play=setInterval(move, 2000);
    var newSwiper = new Swiper('.new .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
        el: '.new .swiper-pagination',
        clickable: true,
        },
        breakpoints: {
        767: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
            },
        },
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
    });     

    var bestSlideClone=$('.best-slide').html();
    $(window).resize(function() { 
        $('.best-slide').off('mouseenter mouseleave');  
        if($(window).width() <768) {                        
            $('.best-slide').empty().append(bestSlideClone)
            $('nav .gnb-menu > li:nth-child(3)').click(function(){
                $('nav .gnb-menu > li:nth-child(3) .depth2_wrap').toggleClass('active');
            })
            $('nav .gnb-menu > li:nth-child(4)').click(function(){
                $('nav .gnb-menu > li:nth-child(4) .depth2_wrap').toggleClass('active');
            })
            // 베스트
            clearInterval(play);
            $('.best-slide ul li').slice(0,3).show();
        
        }else{
            $('.best-slide ul li').show();
            clearInterval(play);
            play=setInterval(move, 2000);

            $('.best-slide').on({
                mouseenter:function(){
                    clearInterval(play);
                },
                mouseleave:function(){
                    clearInterval(play);
                    play=setInterval(move, 2000);
                }
            })
        }
    }).resize();

    $('.more').click(function(){
        if($(this).text()=='접기'){//접기
            $('.best-slide li').hide().slice(0,3).show();
            $(this).text('더보기');
        }else{//더보기
            $('.best-slide li:hidden').slice(0,3).slideDown();
            if($('.best-slide li:hidden').length==0){
                $(this).text('접기');
            }
        }
    }) 
})















