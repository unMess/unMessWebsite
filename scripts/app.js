$( function() {
    var winX = $(window).width();
    var winY = $(window).height();

    console.log(winX);
    console.log(winY);

    $('.bg').width(winX);
    $('.bg').height(winY);
}); 
