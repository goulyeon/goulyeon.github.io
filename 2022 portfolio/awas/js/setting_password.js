$(function(){
    $('#btn-submit').click(function(){
        var currentPW=$('#current-pw').val();
        var changePW=$('#change-pw').val();
        var checkPW=$('#check-pw').val();
        if(currentPW == ''){
            $('.current').show();
            $('.check').hide();
        }
        if(changePW != '' || checkPW != ''){
            if(changePW == checkPW){ //현재 변경 일치할경우
                alert('비밀번호가 변경되었습니다.');
            }else{ //일치하지 않을경우
                $('.current').hide();
                $('.check').show();
            }
        }
    })
})