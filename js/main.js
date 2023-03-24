(function ($) {
    "use strict";

    /* Esta es una función que se llama cuando el usuario se desplaza por la página. Comprueba si el
    usuario se ha desplazado más de 200 px desde la parte superior de la página y, de ser así, se
    desvanece en la barra de navegación. De lo contrario, se desvanece la barra de navegación. */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    /* Una función que se llama cuando el usuario hace clic en un enlace en la barra de navegación. Evita
    la acción predeterminada del enlace y luego anima la página para desplazarse a la sección a la que
    apunta el enlace. También agrega la clase 'activo' al enlace en el que se hizo clic. */
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    /* Esta es una función que se llama cuando el usuario se desplaza hacia abajo en la página. Comprueba
    si el usuario se ha desplazado más de 200 px desde la parte superior de la página y, de ser así, se
    desvanece en la barra de navegación. De lo contrario, se desvanece la barra de navegación. */
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    /* El código anterior usa el modal Bootstrap para mostrar el video. */
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    /* Esta es una función que se llama cuando el usuario se desplaza hacia abajo en la página. Comprueba
    si el usuario se ha desplazado más de 100 px desde la parte superior de la página y, de ser así,
    desvanece el botón de desplazamiento hacia abajo. De lo contrario, se desvanece en el botón de
    desplazamiento hacia abajo. */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    /* Esta es una función que se llama cuando el usuario se desplaza hacia abajo en la página. Comprueba
    si el usuario se ha desplazado más de 100 px desde la parte superior de la página y, de ser así,
    desvanece el botón de desplazamiento hacia abajo. De lo contrario, se desvanece en el botón de
    desplazamiento hacia abajo. */
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

