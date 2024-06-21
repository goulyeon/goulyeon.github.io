$(document).ready(function(){
    

    // 모달 창 띄우기,끄기

    $('.list ul li').click(function(){
        var idx = $(this).index();
        $('.modal-wrap .modal').eq(idx).fadeIn();
        $('html').css("overflow", "hidden");
    });

    $('.modal .close').click(function(){
        $('.modal').fadeOut();
        $('html').css("overflow", "auto");
    });

    $('.bg').click(function(){
        $('.modal').fadeOut();
        $('html').css("overflow", "auto");
    });





});