$(document).ready(function(){

    $(window).on('load', function() {
        selectCus();
    })
    
    function selectCus() {
        $('.select_cus').each(function() {
            const $select = $(this);
            const $selectTrigger = $select.find('.trigger');
            const $options = $select.find('.option');
            const $hiddenInput = $select.find('.opt_val');
    
            //select option 열기
            $selectTrigger.click(function() {
                $options.toggle();
                $select.toggleClass('active');
                $('.select_cus').not($select).find('.option').hide();
                $('.select_cus').not($select).removeClass('active');
            });
    
            //option 선택
            $options.find('li').click(function() {
                const value = $(this).data('value');
                const text = $(this).text();
                $select.find('.trigger_txt').text(text);
                $options.hide();
                $select.removeClass('active');
                //옵션 선택했을 때 클래스 추가
                if (value != '') {
                    $select.addClass('select')
                } else {
                    $select.removeClass('select')
                }
                // hidden 필드에 선택한 값을 설정
                $hiddenInput.val(value);
            });
        });
    
        //select 영역 외 다른곳을 누르면 select 닫힘
        $(document).click(function(e) {
            if (!$(e.target).closest('.select_cus').length) {
                $('.select_cus .option').hide();
                $('.select_cus').removeClass('active');
            }
        });
    }
    
    $('.img-list li').click(function(){
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