jQuery(document).ready(function($) {
    //for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay, .mobile-menu a').on('click', function () {
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });


    // for empty links
    $('.prevent, a[href="#"]').on('click', function(event){
        event.preventDefault();
    });


    // for wrappeng section title in content
    var content = $('.section-content');
    content.find('.section-title, h1').each(function () {
        if (!$(this).parent('.section-title-box').length) {
            $(this).wrap('<div class="section-title-box"></div>');
        }
    });
    content.find('.section-sub-title, h2, h3, h4').each(function () {
        if (!$(this).parent('.section-title-box').length) {
            $(this).wrap('<div class="section-sub-title-box"></div>');
        }
    });


    // for VC container
    $( ".vc_row:not(.vc_inner)" ).wrapInner( "<div class='container'></div>" );


	// for smooth scroll
    if (typeof smoothScroll !== 'undefined') {
        smoothScroll.init({
            selector: 'a', // Selector for links (must be a class, ID, data attribute, or element tag)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInQuad', // Easing pattern to use
            offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
        });
    }


    // for textarea height
    if (typeof autosize !== 'undefined') {
        autosize( $('textarea.input-style') );
    }


    // for table link
    $('.ico-table tbody tr').on('click', function () {
        var url = $(this).data('href'),
            target = ($(this).data('target') === 'blank') ? '_blank' : '_self';

        if (url) {
            window.open(url, target);
        }
    });
    
    // for table sorting
    if (typeof $.tablesorter !== 'undefined') {
        var table = $(".tablesorter");

        if (table.find("tr").length > 1) {
            table.tablesorter({ 
                // theme : 'blue'
            });
        }
    }


    // for news box
    if($('.news-box').length) {
        $(window).on('load, resize', function () {

            var box = $('.news-box:not(.first)'),
                innerBox = box.find('.news-inner-box'),
                maxHeight = 0;

                innerBox.each(function () {
                    if ( $(this).outerHeight() > maxHeight ) {
                        maxHeight = $(this).outerHeight();
                    }
                });
                box.height(maxHeight);
        });
    }
});