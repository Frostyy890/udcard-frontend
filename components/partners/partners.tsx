"use client";
import Card from "./components/card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./partners.styles.css";

const Partners = () => {
  return (
    <section>
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 py-2">
        Наши партнеры:
      </h1>
      <p className="md:text-3xl text-xl font-bold text-center md:py-6 py-4">
        Гостинницы
      </p>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto"></div> */}
      <div className="w-full px-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
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
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1296: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1660: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="md:text-3xl text-xl font-bold text-center py-4 md:py-6">
        Еда
      </h1>
      <div className="w-full px-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={true}
          breakpoints={{
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
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1296: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1660: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
