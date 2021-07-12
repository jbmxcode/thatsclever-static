/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import 'swiper/swiper-bundle.css';
import '../scss/app.scss';

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiper1 = new Swiper('.sw1', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
