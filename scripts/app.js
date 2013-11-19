$( function() {
    var winX = $(window).width();
    var winY = $(window).height();

    $('.bg').width(winX).height(winY);

    var $backgrounds = $('.bg > div');
    var $buttons = $('.sliderButton');
    var i = 0;

    var cycle = ( function cycleBackgrounds() {
        var $thisBg = $backgrounds.eq(i);

        $buttons.removeClass('active');
        $thisBg.fadeIn(2500);

        setTimeout( function(){
            $thisBg.fadeOut(2000, cycleBackgrounds);
        }, 7500);

        $buttons.eq(i).addClass('active');

        i = ++i % $backgrounds.length;

        return function(){};
    })();
        
    $buttons.on('click', function() {
        var index = $(this).index();
        i = index;

        $buttons.eq(i).addClass('active');
        $backgrounds.fadeOut(2000, function(){
       	// hint: try calling the cycle not within this
       	// callback function
            cycle()
        });
    });

	var aboutParent = $('.aboutHead');
	var aboutChild = $('.childAbout');
	var closeChild = $('.upButton')
		
	aboutParent.on( "click.open",function() {
		aboutChild.slideDown( 1500 );
	});
	closeChild.on( "click.close",function() {
		aboutChild.slideUp( 1500 );
	});

}); 

