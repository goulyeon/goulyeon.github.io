$(function(){
    // 아래 탭매뉴 변경
    // $('.tab-menu ul li').click(function(){
    //     $('.tab-menu li').removeClass('active');
    //     $('.tab-menu li:nth-child(2)').addClass('active');
    // })

    // 더보기 버튼
    $('.icon-more').click(function(){
        $('.show-box').fadeToggle();
    })
    $('.show-box .back-bg').click(function(){
        $('.show-box').hide();
    })

    $('.show-box #list').click(function(){
        $('.library-list').show();
        $('.show-box').hide();
        $('.library-post').hide();
    })
    $('.show-box #post').click(function(){
        $('.library-post').show();
        $('.show-box').hide();
        $('.library-list').hide();
    })


    // 편집 목록
    $('.icon-edit').click(function(){
        $('.edit').show();
    })
    // 편집 - 전체선택
    $('#allcheck').click(function(){
        if($('#allcheck').is(':checked')){
            $('input[type=checkbox]').prop('checked', true);
        }else{
            $('input[type=checkbox]').prop('checked', false);
        }
        $('.edit .nav-top .left-top label').toggleClass('icon-all icon-allclear');  
    })

    // 편집 - 취소
    $('.icon-cancle').click(function(){
        $('.edit').hide();
    })

    // 편집 - 삭제
    $('.icon-delete').click(function(){
        if($('input[type=checkbox]').is(':checked')==true){
            $('input[type=checkbox]:checked').parents('li').remove();
        }else{
            alert('삭제할 도서를 선택해주세요.')
        }
    })

    // 편집 - 이동


    // 책장목록
    $('.icon-menu').click(function(){
        location.href="bookshelf.html"
    })





})