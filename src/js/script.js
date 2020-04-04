$(document).ready(function() {
    //Carousel
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.png" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.png" /></button>',
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });

    //Tabs
    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
            .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
            .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    const toggleSlide = (item) => {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            })
        });
    };

    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back');

    //Modal

    $(`[data-modal=consultation]`).on('click', function() {
        $(`.overlay, #consultation`).fadeIn(1700);
        $(`body`).css(`overflow`, `hidden`)
    });

    $('.modal__close').on('click', function() {
        $(`.overlay, #consultation, #order, #thanks`).fadeOut(1700);
        $(`body`).css(`overflow`, `visible`)
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__desc').text($('.catalogue-item__subtitle').eq(i).text());
            $(`.overlay, #order`).fadeIn(1700);
            $(`body`).css(`overflow`, `hidden`)
        })
    })

});