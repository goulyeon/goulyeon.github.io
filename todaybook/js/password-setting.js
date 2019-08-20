$(function(){

    var numIndex=-1;
    $('.password-keypad li').click(function(){
        $('.password-keypad li').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('delete')){//감소
            var num = $(this).text();
            console.log(num);
            numIndex--;
            if(numIndex < -1){
                numIndex=-1;
            }else{
                for(var i=3; i > numIndex; i--){
                    $('.password-input li').eq(i).removeClass('active');                
                }
                $('.password-input li').eq(numIndex).find('span').text(num).removeClass('active');
            }
        }else if($(this).hasClass('num')){//증가
            //숫자를 아무거나 클릭하게되면
            //1.내가 클릭한 숫자를 획득해서 변수에 저장다음에 
            var num = $(this).text();
            console.log(num);
            //2.numIndex가 1씩 증가한다.
            numIndex++;
            //3.만약 numIndex가 최대 인덱스인 3을 넘어선다면 최대값으로 변경해준다.
            if(numIndex >= 4){
                numIndex=3;
            }else{
                //4. .password-input의 li에 접근해서 현재 변화된 numIndex숫자만큼 반복문을 돌려서 켜준다.
                for(var i=0; i <= numIndex; i++){
                    $('.password-input li').eq(i).addClass('active');
                }
                // 2번에서 구한 변수의 값을 넣어준다. span까지 접근해서
                $('.password-input li').eq(numIndex).find('span').text(num);
                if(numIndex==3){
                    setTimeout(function() {
                        window.location.replace("mypage.html");
                    }, 200);
                }
            }
        }
    });
})