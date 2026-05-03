// ===============================================
//     header ハンバーガーメニュー
// ===============================================

$(function () {
    $('.hamburger').on('click', function () {
        $('header').toggleClass('open');
    });

    $('.header-nav a').on('click', function () {
        $('header').removeClass('open');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header-nav, .hamburger').length) {
            $('header').removeClass('open');
        }
    });
});





// ===============================================
//     swiper
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 30,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                spaceBetween: 50,
                slidesPerView: 4,
            }


        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if (index < 4) {
                    return `<span class="${className}"></span>`;
                }
                return '';
            }
        },



        on: {
            slideChange: function () {
                const realIndex = this.realIndex % 4;
                const bullets = document.querySelectorAll('.swiper-pagination span');

                bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));

                if (bullets[realIndex]) {
                    bullets[realIndex].classList.add('swiper-pagination-bullet-active');
                }
            }
        }
    });
});