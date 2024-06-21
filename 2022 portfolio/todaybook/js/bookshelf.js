$(function(){
    // 책장 - 슬라이드업
    $('.bookshelf .my-list .icon-up').click(function(){
        $('.bookshelf .my-list ul').slideToggle();
        $(this).toggleClass('icon-up icon-down');  
    })
    $('.bookshelf .part-list .icon-up').click(function(){
        $('.bookshelf .part-list ul').slideToggle();
        $(this).toggleClass('icon-up icon-down');  
    })

    // 책장 추가
    $('.bookshelf .my-list .list-plus .plus').click(function(){
        $('.bookshelf .my-list .list-plus .name').show();
    })
    $('.bookshelf .my-list .list-plus .name button').click(function(){
        $('.bookshelf .my-list .list-plus .name').hide();
    })

    $('.icon-close').click(function(){
        window.history.back();
    })
    
})