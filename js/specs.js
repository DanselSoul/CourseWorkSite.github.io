
$(document).ready(function(){
        $('.visible').bind('click', function(){
            $(this).toggleClass('specActive');
            $(this).next().slideToggle('normal');
            opened = true;
        })
});


$(".visible").click(function() {
    $(this).toggleClass("open");
});

$(document).ready(function(){
    $('main').slideToggle('slow');
    $('footer').slideToggle('slow');
});
