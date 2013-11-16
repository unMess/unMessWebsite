$( function() {
    var winX = $(window).width();
    var winY = $(window).height();

    console.log(winX);
    console.log(winY);

    // $('.bg').each( function() {
    //     $(this).fadeIn().fadeOut();
    // });
    $('.bg').width(winX);
    $('.bg').height(winY);

//    $('.bg1').fadeIn().delay(2000).next('.bg').fadeIn();
}); 
