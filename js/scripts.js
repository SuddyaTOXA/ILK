jQuery(document).ready(function($) {
    // for empty links
    $('.prevent, a[href="#"]').on('click', function(event){
        event.preventDefault();
    });

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

    //for table link
    $('.ico-table tbody tr').on('click', function () {
        var url = $(this).data('href');

            window.open(url ,'_blank');
    })


});