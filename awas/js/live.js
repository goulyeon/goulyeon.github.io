$(function(){
    // 메뉴 보이기,숨기기
    $('.open-btn').click(function(){
        $('.left-box').toggleClass('open');
        $('.live').toggleClass('active');
    })

    $('.popup .close').click(function(){
        $('.popup').hide();
    })



})