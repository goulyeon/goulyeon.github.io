$(document).ready(function(){

    // tab 메뉴 eq로
    $(".tab-menu li").click(function(){
        var index = $(".tab-menu li").index(this);

        $(".tab-menu li").removeClass("active");
        $(this).addClass("active");

        $(".tab-con").removeClass("on");
        $(".tab-con").eq(index).addClass("on");

    });


    //FAQ 아코디언
    $(".faq ul li h4").click(function(){

        if($(this).hasClass("active")){
            slideUp();
        } else {
            slideUp();
            $(this).addClass("active").next().slideDown();
        }

        function slideUp(){
            $(".faq ul li h4").removeClass("active").next().slideUp();
        }

    });





});