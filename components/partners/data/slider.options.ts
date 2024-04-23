import { SwiperOptions } from "swiper/types";

export const customSliderOptions: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: true,
  navigation: true,
  pagination: { clickable: true, dynamicBullets: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    912: {
      slidesPerView: 3,
    },
    1296: {
      slidesPerView: 4,
    },
    1660: {
      slidesPerView: 5,
    },
  },
};
