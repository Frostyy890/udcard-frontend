import { SwiperOptions } from "swiper/types";

export const customSliderOptions: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  navigation: true,
  pagination: { clickable: true },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    430: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1296: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1660: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
};
