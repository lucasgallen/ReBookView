(function($) {
    var $gameoflife = $('#game-of-life'),
        $window = $(window),
        gameWidth = 1200,
        setMargin;

    $window.resize(function() {
        setMargin = ($window.width() - gameWidth)/2;

        $gameoflife.css('margin', '0 ' + setMargin + 'px');
     })
}(jQuery))
