/**
 * Created by Evgenii on 25.05.2015.
 */
$(document).ready(function() {
    var innerBlock = $('.block-banner_inner');
    var blockHeight = $('.block-banner').height();
    var innerHeight = $('.block-banner_inner').height();

    if($(window).width() < 480) {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 50 });
    } else if ($(window).width() < 640 ) {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 80 });
    } else {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 100 });
    }

    $('.menu-mobi').on('click', function () {
       $('.block-menu').toggle();
    });
});

$(window).on('resize', function() {
    var innerBlock = $('.block-banner_inner');
    var blockHeight = $('.block-banner').height();
    var innerHeight = $('.block-banner_inner').height();

    if($(window).width() < 480) {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 50 });
    } else if ($(window).width() < 640 ) {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 80 });
    } else {
        innerBlock.offset({ top: (blockHeight - innerHeight)/2 + 100 });
    }
});
