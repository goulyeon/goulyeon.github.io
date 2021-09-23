$(document).ready(function(){


// 스크롤시 변화
sel1 = $("#home").offset().top;
sel2 = $("#about").offset().top;
sel3 = $("#portfolio").offset().top;
sel4 = $("#design").offset().top;
sel5 = $("#contact").offset().top;
console.log(sel1,sel2,sel3,sel4,sel5);

$(window).on("scroll",function(){
    scroll = $(this).scrollTop();
    // skill
    if(scroll >= sel2 && scroll < sel3){
        $("#about .r_box .sk ul li .bar .a_h").stop().animate({"width":"90%"},800);
        $("#about .r_box .sk ul li .bar .a_c").stop().animate({"width":"80%"},800);
        $("#about .r_box .sk ul li .bar .a_js").stop().animate({"width":"70%"},800);
        $("#about .r_box .sk ul li .bar .a_pa").stop().animate({"width":"90%"},800);
    }else{
        $("#about .r_box .sk ul li .bar .a_h").css({"width":"0%"});
        $("#about .r_box .sk ul li .bar .a_c").css({"width":"0%"});
        $("#about .r_box .sk ul li .bar .a_js").css({"width":"0%"});
        $("#about .r_box .sk ul li .bar .a_pa").css({"width":"0%"});
    }
})

// 로고 이미지 변경
$("#header h1").on("mouseenter",function(){
    $("#header .logo").css({"display":"none"});
    $("#header .logo_h").css({"display":"block"});
})
$("#header h1").on("mouseleave",function(){
    $("#header .logo").css({"display":"block"});
    $("#header .logo_h").css({"display":"none"});
})

// 오른쪽 아이콘 마우스 오버시 변화
$("#header .right ul li").on("mouseenter",function(){
    $(this).stop().animate({"left":"-70px","background-color":"#222"});
    $(this).find("i").css({"color":"#fff"});
    $(this).find("p").css({"opacity":"1"});
});
$("#header .right ul li").on("mouseleave",function(){
    $(this).stop().animate({"left":"0","background-color":"##fafafa"});
    $(this).find("i").css({"color":"#222"});
    $(this).find("p").css({"opacity":"0"});
});

// top버튼
$("#header .top_btn").on("click",function(){
    $("html,body").stop().animate({scrollTop:0},1000)
});
$("#header .top_btn").on("click",function(){
    $("html,body").stop().animate({scrollTop:0},1000)
});

// home 화면 일러스트 반복 에니메이트
$(function aaa(){
    $('#home .r_box .h1').stop().animate({"rotate":"5deg"},1000,function(){
        $('#home .r_box .h1').stop().animate({"rotate":"0deg"},1000,aaa);
    });
    $('#home .r_box .h2').stop().animate({"rotate":"-5deg"},1000,function(){
        $('#home .r_box .h2').stop().animate({"rotate":"0deg"},1000,aaa);
    });
    $('#home .cursor').stop().animate({"opacity":"0.5"},800,function(){
        $('#home .cursor').stop().animate({"opacity":"1"},800,aaa);
    });
});

// home 화면 마우스 엔터,리브에 따른 변화
// pc
$("#home .pc .l_box").on("mouseover",function(){
    $(this).stop().animate({"width":"70%"},1000,function(){
        $(this).find("p").stop().animate({"top":"50%","opacity":"1"},500);
    });
    $("#home .pc h2").stop().animate({"left":"70%"},1000);
    $("#home .pc .r_box").stop().animate({"width":"30%"},1000);
    $("#home .pc .r_box img").hide();
    $("#home .pc .cursor").hide();
});

$("#home .pc .l_box").on("mouseleave",function(){
    $(this).stop().animate({"width":"30%"},1000);
    $(this).find("p").css({"top":"60%","opacity":"0"});
    $("#home .pc h2").stop().animate({"left":"30%"},1000);
    $("#home .pc .r_box").stop().animate({"width":"70%"},1000,function(){
        $("#home .pc .r_box img").show();
    });
    $("#home .pc .cursor").show();
});
// ta
$("#home .ta .l_box").on("mouseover",function(){
    $(this).stop().animate({"width":"80%"},1000,function(){
        $(this).find("p").stop().animate({"top":"50%","opacity":"1"},500);
    });
    $("#home .ta .r_box").stop().animate({"width":"20%"},1000);
    $("#home .ta .r_box img").hide();
    $("#home .ta .r_box h2").hide();
    $("#home .ta .cursor").hide();
});

$("#home .ta .l_box").on("mouseleave",function(){
    $(this).stop().animate({"width":"20%"},1000);
    $(this).find("p").css({"top":"60%","opacity":"0"});
    $("#home .r_box").stop().animate({"width":"80%"},1000,function(){
        $("#home .r_box img").show();
        $("#home .ta .r_box h2").show();
    });
    $("#home .cursor").show();
});
// mo
$("#home .mo .l_box").on("mouseover",function(){
    $(this).stop().animate({"width":"80%"},1000,function(){
        $(this).find("p").stop().animate({"top":"50%","opacity":"1"},500);
    });
    $("#home .mo .r_box").stop().animate({"width":"20%"},1000);
    $("#home .mo .r_box img").hide();
    $("#home .mo .r_box h2").hide();
    $("#home .mo .cursor").hide();
});

$("#home .mo .l_box").on("mouseleave",function(){
    $(this).stop().animate({"width":"20%"},1000);
    $(this).find("p").css({"top":"60%","opacity":"0"});
    $("#home .r_box").stop().animate({"width":"80%"},1000,function(){
        $("#home .r_box img").show();
        $("#home .mo .r_box h2").show();
    });
    $("#home .cursor").show();
});


// 메뉴 버튼 눌렀을때 도형 움직임 반복
$("#header .menu").on("click",function(){
    $(this).toggleClass("on");
    $("#header .nav").toggleClass("on");
    $(function bbb(){
        $("#header .nav.on .figure").stop().animate({"bottom":"-150px"},800,function(){
            $("#header .nav.on .figure").stop().animate({"bottom":"-160px"},800,bbb);
        });
    });
});
// 메뉴 눌렀을때 창 사라짐
$("#header .nav li a").on("click",function(){
    $("#header .nav").removeClass("on");
    $("#header .menu").removeClass("on");
});


// about 사진 움직임 반복
$(function aaa(){
    $("#about .l_box .ab1").stop().animate({"top":"31%","left":"59%"},1000,function(){
        $("#about .l_box .ab1").stop().animate({"top":"30%","left":"60%"},1000,aaa);
    });
    $("#about .l_box .ab3").stop().animate({"top":"78%","left":"35%"},1000,function(){
        $("#about .l_box .ab3").stop().animate({"top":"80%","left":"34%"},1000,aaa);
    });
});





// portfolio 자세히 보기 닫기
$("#portfolio .mon_more").on("click",function(){
    $("#portfolio .mon").fadeIn();
});
$("#portfolio .mon .close").on("click",function(){
    $("#portfolio .mon").fadeOut();
});

// design 자세히 보기 닫기
$("#design .gallery li").on("click",function(){
    src = $(this).find("a").attr('href');
    console.log(src);
    $("#design .pop .box .g_box").css({"background-image":"url("+src+")"});
    $("#design .pop").fadeIn();
});
$("#design .pop .close").on("click",function(){
    $("#design .pop").fadeOut();
});

// design 버튼슬라이드
$("#design .next").on("click",function(){
    $("#design .wrap").animate({"left":"-100%"});
});
$("#design .prev").on("click",function(){
    $("#design .wrap").animate({"left":"0%"});
});

// design 버튼슬라이드 mo
total_m = $("#design .wrap.mo .gallery").length;
i = 0;
console.log(total_m)
$("#design .next").on("click",function(){
    if(i == total_m-1){
    }else i++;
    $("#design .mo").stop().animate({"left":i*-100+"%"});
});
$("#design .prev").on("click",function(){
    if(i > 0) i--;
    $("#design .mo").stop().animate({"left":i*-100+"%"});
});



// contact pc 도형 움직임 반복
$(function aaa(){
    $("#contact .pc .figure1").stop().animate({"bottom":"-4%","right":"-6%"},1500,function(){
        $("#contact .pc .figure1").stop().animate({"bottom":"-6%","right":"-8%"},1500,aaa);
    });
    $("#contact .pc .figure2").stop().animate({"top":"1%","left":"-5%"},1500,function(){
        $("#contact .pc .figure2").stop().animate({"top":"2%","left":"-4%"},1500,aaa);
    });
    $("#contact .pc .figure3").stop().animate({"bottom":"21%","right":"13%"},1200,function(){
        $("#contact .pc .figure3").stop().animate({"bottom":"20%","right":"14%"},1200,aaa);
    });
    $("#contact .pc .figure4").stop().animate({"top":"49%","left":"12%"},1000,function(){
        $("#contact .pc .figure4").stop().animate({"top":"48%","left":"11%"},1000,aaa);
    });
});


// contact ta 도형 움직임 반복
$(function aaa(){
    $("#contact .ta .figure1").stop().animate({"bottom":"-4%","right":"-6%"},1500,function(){
        $("#contact .ta .figure1").stop().animate({"bottom":"-6%","right":"-8%"},1500,aaa);
    });
    $("#contact .ta .figure2").stop().animate({"top":"1%","left":"-5%"},1500,function(){
        $("#contact .ta .figure2").stop().animate({"top":"2%","left":"-4%"},1500,aaa);
    });
    $("#contact .ta .figure3").stop().animate({"bottom":"20%","right":"23%"},1200,function(){
        $("#contact .ta .figure3").stop().animate({"bottom":"22%","right":"24%"},1200,aaa);
    });
    $("#contact .ta .figure4").stop().animate({"top":"33%","left":"12%"},1000,function(){
        $("#contact .ta .figure4").stop().animate({"top":"34%","left":"11%"},1000,aaa);
    });
});


// contact mo 도형 움직임 반복
$(function aaa(){
    $("#contact .mo .figure1").stop().animate({"bottom":"-12%","right":"-28%"},1500,function(){
        $("#contact .mo .figure1").stop().animate({"bottom":"-9%","right":"-31%"},1500,aaa);
    });
    $("#contact .mo .figure2").stop().animate({"top":"0%","left":"-23%"},1500,function(){
        $("#contact .mo .figure2").stop().animate({"top":"-3%","left":"-26%"},1500,aaa);
    });
    $("#contact .mo .figure3").stop().animate({"bottom":"20%","right":"24%"},1200,function(){
        $("#contact .mo .figure3").stop().animate({"bottom":"18%","right":"22%"},1200,aaa);
    });
    $("#contact .mo .figure4").stop().animate({"top":"26%","left":"12%"},1000,function(){
        $("#contact .mo .figure4").stop().animate({"top":"27%","left":"12%"},1000,aaa);
    });
});


});