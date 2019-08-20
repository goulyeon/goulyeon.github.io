$(function(){
    $('nav .tab-menu ul a').click(function(){
        $('nav .tab-menu ul a').removeClass('active');
        $(this).addClass('active');
    });

    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    $('.tab a').click(function(e){
        e.preventDefault();
        $('.tab a').removeClass('active'); 
        $(this).addClass('active'); 

        $('.tab span').removeClass('active'); 
        $(this).find('span').addClass('active'); 

        var id=$(this).attr('href');

        $('.tab-contents div').removeClass('active');               
        $(id).addClass('active');
    });

    // 맞춤설정
    $('#recommend button').click(function(){
        $('#main, .main-header, nav, #recommend .img-wrap').hide();
        $('#recommend-setting, .recommend-header, #recommend p, #recommend button').show();
    })

    $('#recommend-setting > button').click(function(){
        $('#recommend-setting, .recommend-header, #recommend p, #recommend button').hide();
        $('#main, .main-header, nav, #recommend .img-wrap').show();
    })
})