$(function(){
    $('nav .tab-menu ul a').click(function(){
        $('nav .tab-menu ul a').removeClass('active');
        $(this).addClass('active');
    })

    $('#on-off1').click(function(){
        if($(this).has('.active')){
            setTimeout(function() {
                location.href = 'password-setting.html';
            }, 350);
        }
    })

    $('.setting a').click(function(){
        $('.popup-logout').show();
    })

    $('.button-wrap button').click(function(){
        if($(this).attr('id')=='cancel'){
            console.log('닫기');
            $('.popup-logout').hide();
        }else{
            if($(this).attr('id')=='confirm'){
                $('.setting a').html(`로그인<i class="icon icon-next"></i>`);
                $('.setting a').parent().find('li').remove();
                $('.popup-logout').hide();
                $('.popup-logout ').find('.message').text('로그인 하시겠습니까?');
            }   
        }
    })
})