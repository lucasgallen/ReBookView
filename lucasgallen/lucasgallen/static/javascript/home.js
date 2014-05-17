(function($) {
    var continueTop = $('body').find('article.about-me').offset().top;

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
