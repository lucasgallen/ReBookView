(function($) {
    var $siteMenu = $('.site-menu');

    $('#contact-trigger').on('click', function() {
        $('#overlay').toggleClass('active');
    });

    $('#overlay-close').on('click', function() {
        $('#overlay').toggleClass('active');
    });

    $('#small-menu-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        if ($siteMenu.hasClass('active')) {
            $siteMenu.removeClass('active');
        } else {
            $siteMenu.addClass('active');
        }
    });

}(jQuery));
