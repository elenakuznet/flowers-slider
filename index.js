const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
        },
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.button-right',
        prevEl: '.button-left',
        },

        keyboard: true,
    
        // And if we need scrollbar
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },

        breakpoints: {
                
                320: {
                slidesPerView: 1,
                spaceBetween: 5
                },
                
                480: {
                slidesPerView: 2,
                spaceBetween: 10
                },
                
                768: {
                slidesPerView: 3,
                spaceBetween: 20
                },
                
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
            }
    });