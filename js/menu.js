
$('.modelsNav').bind({
    // touchstart: function(e){ 
    //     e.stopPropagation(); //для смартфонов
        
    //         $('.subMenu').slideDown('fast');
    // },
    mouseenter: function(){
        if($(window).width() <= 900){
            return;
        }
        else{
            $('.subMenu').slideDown('fast');
        }
    },
    mouseleave: function(){
        if($(window).width() <= 900){
            return;
        }
        else{
            $('.subMenu').slideUp('fast');
        }
    }
  });
  
  $('body').on('touchstart', function(e){
        $('.subMenu').slideUp('1s');
  });
