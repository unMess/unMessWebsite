$( function() {
    var winX = $(window).width();
    var winY = $(window).height();

    $('.bg').width(winX);
    $('.bg').height(winY);

    // fade in first bg on load
    //$('.bg > div').each( function(index) {

    var $backgrounds = $('.bg > div');
    var i = 0;

    ( function cycleBackgrounds() {

        $backgrounds.eq(i).fadeIn(2000)
            .delay(5000)
            .fadeOut(2000, cycleBackgrounds);

        i = ++i % $backgrounds.length;
    })();
        

}); 
