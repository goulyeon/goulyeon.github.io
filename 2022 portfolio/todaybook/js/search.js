$(function(){
    $('.icon-back').click(function(){
        window.history.back();
        $('#search-result').hide();
        $(this).parents().find('#search-contents').show();
    })

    $('.recent button').click(function(){
        $(this).parent().remove();
        var count=$('.recent li').length;
        if(count==0){
            $('.recent').append(`<p>최근검색어가 없습니다.</p>`);
        }else{
            $('.recent p').remove();
        }
    })

    $('.icon-search').click(function(){
        var value = $('#search').val();

        $('#search-contents').hide();
        $(this).parents().find('#search-result').show();
        $('.popup-search b').text(value);
    })

    $('.recent a').click(function(){
        var text = $(this).text();
        
        $('#search-contents').hide();
        $(this).parents().find('#search-result').show();
        $('.popup-search b').text(text);
    })
})