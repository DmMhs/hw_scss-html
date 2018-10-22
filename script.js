$(function(){
    $('.toggle').click(function(){
        $('.sidebar').toggle();
    });
    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() > 992.000001) { 
            $('.sidebar').show();
         }
    });
});

