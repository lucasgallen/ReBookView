(function($) {
    var $backLink = $('#back-link');

    $('#contact-trigger').on('click', function() {
        $('#overlay').toggleClass('active');
    });

    $(document).on('click', '#overlay', function() {
        if (event.target.className === 'contact active') {
            $('#overlay').toggleClass('active');
        }
    });

    document.addEventListener('touchend', function(e) {
        if (e.target.id === 'overlay') {
            e.preventDefault();
            $('.contact.active').click();
            e.stopPropagation();
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

    if ($backLink.is(':visible')) {
        console.log('hello');
        $backLink.on('click', function(e) {
            window.history.back();
            e.preventDefault();
        });
    }
}(jQuery))
