$(function(){
    $('.popover button').click(function(){
        if($(this).next().css('display')!='block'){
            console.log('펼쳐져있지 않음');                    
            $('.del-popover').hide();
            $(this).next().show();
        }else{
            $(this).next().hide();
        }    
    })

    $('.del-popover').click(function(){
        if($(this).parents().hasClass('book-wrap')){
            $(this).parents().find('.content-wrap').remove();
            $('.book-wrap').append('<b>작성된 독서록이 없습니다.</b>');
        }else if($(this).parents().hasClass('book-memo')){
            $(this).parents().find('.memo-content').remove();
            $('.book-memo').append('<b>작성된 메모가 없습니다.</b>');  
        }else{
            $(this).parents('.mark-wrap').remove();
            var count=$('.book-mark li').length;
            if(count==0){
                $('.book-mark').append('<b>생성된 형광펜이 없습니다.</b>');
            }else{
                $('.book-mark b').remove();
            }
        }
    })
   
    $('html').click(function(e){
        if(!$(e.target).is('.popover button')){
            $('.del-popover').hide();
        }
    })
})