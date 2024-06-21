$(function(){
    $('.checkbox i').click(function(){
        $(this).toggleClass('active');
    })

    $('.radio i').click(function(){
        $('.radio i').removeClass('active');
        $(this).toggleClass('active');
    })

    $('.select-choice').click(function(){
        $(this).next().slideToggle();                
    })

    $('#age-select a').click(function(e){
        e.preventDefault();
        var name=$(this).text();
        $(this).parents('#age-select').find('span').text(name);
        $(this).parents('#age-select').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('#age-select').find('ul').slideUp();
    })

    $('html').click(function(e){
        if(!$(e.target).is('.select-choice')){
            $('#age-select ul').slideUp();
        }
    })
})