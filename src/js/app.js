/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import 'swiper/swiper-bundle.css';
import '../scss/app.scss';

import Swiper from 'swiper';
import SwiperCore, {
    Navigation, Pagination, Autoplay, Thumbs,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

const swiper1 = new Swiper('.sw1', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
    },
});

const swiper2 = new Swiper('.sw2', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const swiper3 = new Swiper('.sw3', {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

const product = new Swiper('.swiper-product', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const productThumbs = new Swiper('.swiper-product-thumbs', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: product,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

