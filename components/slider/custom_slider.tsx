"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//SLIDER DEPENDANCIES
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom_slider.styles.css";
import { SliderSlide } from "./slider.data";

interface CustomSliderProps {
  slides: SliderSlide[];
}

const CustomSlider : React.FC<CustomSliderProps> = ({slides}) => {
  return (
      <Swiper
        pagination={{
          type: "bullets",
        }}
        autoHeight={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link}>
              <div>{slide.label}</div>
              <Image width={100} height={100} src={slide.imgURL} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default CustomSlider;
