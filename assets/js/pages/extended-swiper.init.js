/*
Template Name: Simple - Tailwind HTML Admin Dashboard Template
Version: 1.0
Author: CoderThemes
Email: support@coderthemes.com
File: Tour init js
*/



import Swiper from "swiper";
import 'swiper/swiper-bundle.css'

function twitter() {
    new Swiper("#twitter-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

        },
    });
};
twitter();

function facebook() {
    new Swiper("#facebook-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

        },
    });
};
facebook();
