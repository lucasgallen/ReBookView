(function($) {
    var $carousel = $('.carousel-container').find('ul'),
        $dresden = $('#the-dresden-files').find('img'),
        $asoiaf = $('#a-song-of-ice-and-fire'),
        dresdenGalleryPositionX = [11, 326, 648, 961, 1279, 1596],
        dresdenGalleryPositionY = [-30, -526],
        IceAndFireBook = 1,
        dresdenGalleryPosition = [],
        randomPosX,
        randomPosY,
        $carouselPosition;

    
    $('#right-control').on('click', function(e) {
        e.preventDefault();

        $carouselPosition = parseInt($carousel.css('left'));
        if($carouselPosition <= -1845) {
            $carousel.css('left', 0); 
        } else {
            $carousel.css('left', $carouselPosition - 615 + 'px');
        }
    }); 

    $('#left-control').on('click', function(e) {
        e.preventDefault();

        $carouselPosition = parseInt($carousel.css('left'));
        if($carouselPosition >= 0) {
            $carousel.css('left', -1845 + 'px');
        } else {
            $carousel.css('left', $carouselPosition + 615 + 'px');
        }
    });

    setInterval(function() {
        randomPosX = Math.floor(Math.random()*6);
        randomPosY = Math.floor(Math.random()*2);
        $dresden.css('top', dresdenGalleryPositionY[randomPosY] + 'px');
        $dresden.css('right', dresdenGalleryPositionX[randomPosX] + 'px');

        setTimeout(function() {
            $asoiaf.find('img[data-book="' + IceAndFireBook + '"]').css('opacity', 0);
            IceAndFireBook = Math.floor(Math.random()*6);
            $asoiaf.find('img[data-book="' + IceAndFireBook + '"]').css('opacity', 1);
        }, 200);

    }, 3000);

}(jQuery))
