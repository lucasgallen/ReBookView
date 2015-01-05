(function($) {
    var $siteMenu = $('.site-menu');

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
