$(function(){
    $('nav .tab-menu ul a').click(function(){
        $('nav .tab-menu ul a').removeClass('active');
        $(this).addClass('active');
        var id=$(this).attr('href');
        $().hide();
        $(id).show();
    })
})