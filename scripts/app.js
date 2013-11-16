$( function() {
    var winX = $(window).width();
    var winY = $(window).height();

    $('.bg').width(winX);
    $('.bg').height(winY);

    // fade in first bg on load
    $('.bg1').fadeIn(3000);
}); 
