window.addEventListener('load', function () {

    (function () {

        var swiperSelectors = ['.swiper-container.m-1', '.swiper-container.m-2', '.swiper-container.m-2', '.swiper-container.m-2'],
            swiperObj = [],
            swiperConfig = {
                direction: 'horizontal',
                loop: false,
                width: 226,
                spaceBetween: 50,
                pagination: '.select-pagination'
            };

        swiperSelectors.forEach(function (selector) {
            swiperObj.push(new Swiper(selector, swiperConfig));
        });

        var tabSwitch = function (event) {

            // you can do it everythings

        };

        tabSwitch();

    })();

}, false);

