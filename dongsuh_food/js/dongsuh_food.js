$(function(){

    var bannerSwiper = new Swiper('.top-left .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
    });


    var newsSwiper = new Swiper('.hot-news .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.news-wrap .swiper-pagination',
          clickable: true,
        },
        loop: true
    });


    var newSwiper = new Swiper('.new-product .swiper-container', {
      pagination: {
        el: '.new-wrap .swiper-pagination',
        clickable: true,
      },
      loop: true
    });

    var societySwiper = new Swiper('.society .swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.society-wrap .swiper-pagination',
        clickable: true,
      },
      loop: true
    });

    var tvcfSwiper = new Swiper('.tvcf .swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.tvcf-wrap .swiper-pagination',
        clickable: true,
      },
      loop: true
    });

    var wedzineSwiper = new Swiper('.webzine .swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.webzine-wrap .swiper-pagination',
        clickable: true,
      },
      loop: true
    });



    // 하단 탭메뉴
    $('.tab .tab-menu a').click(function(e){
      e.preventDefault();
      $('.tab .tab-menu a').removeClass('active');
      $(this).addClass('active');

      var id=$(this).attr('href');

      $('.tab-contents .tab-wrap').stop(true).fadeOut();
      $(id).stop(true).fadeIn();
    })

    // 로그인팝업
    $('.login').click(function(){
      $('.pop-login,.back-block').fadeIn();
      $('.pop-search,.back-block2').fadeOut();
    })
    $('.pop-top button').click(function(){
      $('.pop-login,.back-block').fadeOut();
    })

    // 검색창
    $('.search').click(function(){
      $('.pop-search,.back-block2').fadeToggle();
    })
    $('.close').click(function(){
      $('.pop-search,.back-block2').fadeOut();
    })

})


    