$(function(){
    // 다운로드
    $('.icon-download').click(function(e){
        e.preventDefault();
        $(this).parents().find('.popup-download').show();
    });
    
    $('.popup-download button').click(function(){
        if($(this).attr('id')=='cancel'){
            $(this).parents('.popup-download').hide();
        }else{
            $(this).parents('.popup-download').hide();
            $(this).parents().find('.popup-web').show();
        }
    });

    // 다운로드-확인-웹사이트이동
    $('.popup-web button').click(function(){
        if($('.popup-web button').attr('id')=='cancel'){
            $(this).parents('.popup-web').hide();
        }else{
            $(this).parents('.popup-web').hide();
        }
    });

    // 탭메뉴
    $('.tab li').click(function(e){
        e.preventDefault();
        $('.tab a').removeClass('active'); 
        $(this).find('a').addClass('active');
        $('.tab span').removeClass('active');
        $(this).find('span').addClass('active');

        var id=$(this).find('a').attr('href');

        $('.tab-contents div').removeClass('active');               
        $(id).addClass('active');
    })

    // 책소개 내용 더보기
    $('.btn-more').click(function(e){
        e.preventDefault();
        $('.bookinfo-wrap p').removeClass('overflow');
        $(this).remove();
    });

    // 리뷰작성 별점
    $('.review-write .star-wrap a').click(function(e){
        e.preventDefault();
        $(this).parent().children('i').removeClass('on');
        $(this).find('i').addClass('on').prevAll('i').addClass('on');
    });

    // 리뷰작성 등록
    $('.btn-submit').click(function(e){
        e.preventDefault();
        $(this).parents().find('.my-review-new').show();
        $('.my-review-new').prepend($('.my-review-new'));
        var value = $('#review').val();
        $('.my-review-new p').text(value);
    });

    // 리뷰 계속읽기
    $('.more-read').click(function(e){
        e.preventDefault();
        $('.review-contents p').removeClass('overflow');
        $(this).parents().find('.my-review').css('height','180px');
        $(this).remove();
    });

    // 리뷰 삭제
    $('.delete').click(function(e){
        e.preventDefault();
        $(this).parent('div').remove();
    });
})