"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "./home.styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <section id="#" className="py-4">
      <div className="h-[20rem] md:h-[40rem] text-gray-900 px-4">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      {/* <Link href="#about" className="text-center animate-bounce">
        <ArrowDownwardIcon sx={{ color: "gray", fontSize: "3rem" }} />
      </Link> */}
    </section>
  );
};

export default Home;
