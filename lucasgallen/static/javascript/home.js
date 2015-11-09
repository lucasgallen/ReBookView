(function($) {
    var $body = $('body'),
        continueTop = $body.find('article.about-me').offset().top,
        $navDisplacement = $('section.welcome').css('padding-top');

    continueTop = continueTop + parseInt($navDisplacement, 10);

    $('#continue').on('click', function() {
        $body.animate({
            scrollTop: continueTop + 'px'
        });
    });

    $('#back').on('click', function() {
        $body.animate({
            scrollTop: 0
        });
    });

}(jQuery))
