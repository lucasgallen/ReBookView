(function($) {
    $('#contact-trigger').on('click', function() {
        $('#overlay').toggleClass('active');
    });

    $(document).on('click', '#overlay', function() {
        if (event.target.className === 'contact active') {
            $('#overlay').toggleClass('active');
        }
    });

    $('#small-menu-toggle').on('click', function() {
        var $siteMenu = $('.site-menu');

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

}(jQuery))
