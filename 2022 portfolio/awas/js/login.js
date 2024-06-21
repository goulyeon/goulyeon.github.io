$(function(){
    $('#btn-submit').click(function(){
        var id=$('#id').val();
        var password=$('#password').val();
        console.log(id,password);
        $('.message').remove();

        if(id==''){
            $('#password').after('<p class="message">아이디나 비밀번호가 일치하지 않습니다.</p>').focus();
        }else if(password==''){
            $('#password').after('<p class="message">아이디나 비밀번호가 일치하지 않습니다.</p>').focus();
        }else{
            location.href = 'Dashboard.html';
        }
    })

})