$(document).ready(function(){


// 탭메뉴
$('.tabnav li a').click(function(e){
    e.preventDefault();
    $('.tabnav li a').removeClass('active');
    $(this).addClass('active');

    var id=$(this).attr('href');

    $('.tabcon .tab-wrap').stop(true).hide();
    $(id).stop(true).show();
})



// 풀캘린더
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
initialView: 'dayGridMonth',
locale: "ko",
contentHeight: 'auto',
events: [
    {
        title: '소멸을 두려워하는 태도',
        start: '2021-08-28',
        end: '2021-09-15',
        color: '#E0E0E0'
    },
    {
        title: '냥만적인 가을',
        start: '2021-08-31',
        end: '2021-10-03',
        color: '#FFC4B7'
    },
    {
        title: '구름 그림자',
        start: '2021-09-07',
        end: '2021-10-23',
        color: '#BEE1C8'
    },
    {
        title: '3 to 80',
        start: '2021-09-09',
        end: '2021-10-04',
        color: '#ACC8F4'
    },
    {
        title: '상상의 정원',
        start: '2021-09-10',
        end: '2021-11-28',
        color: '#F2EDB3'
    },
    {
        title: '이지현 : Montage',
        start: '2021-09-17',
        end: '2021-10-19',
        color: '#E0E0E0'
    },
    {
        title: '먼길 이야기',
        start: '2021-10-05',
        end: '2021-11-19',
        color: '#ACC8F4'
    },
    {
        title: '2021 부천만화대상 특별전 <새로운 연결:다르게 바라보다>',
        start: '2021-10-11',
        end: '2021-10-31',
        color: '#FFC4B7'
    },
    {
        title: '나의 친애하는',
        start: '2021-10-21',
        end: '2021-11-14',
        color: '#E0E0E0'
    }
]
});
calendar.render();



// 페이지네이션
$(".page li").on("click",function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
});








});
  






