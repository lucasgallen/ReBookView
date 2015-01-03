(function($) {
    var continueTop = $('body').find('article.about-me').offset().top,
        $navDisplacement = $('section.welcome').css('padding-top');

    continueTop = continueTop + parseInt($navDisplacement, 10);

    $('#continue').on('click', function() {
        $('.home').animate({
            scrollTop: continueTop
        });        
    });

    $('#back').on('click', function() {
        $('.home').animate({
            scrollTop: 0
        });        
    });

}(jQuery))
