"use client";
import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { customSliderOptions } from "../../data/slider.options";
import Card from "../card/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Partner } from "../../data/partners.data";

interface PartnersSliderProps {
  partners: Partner[];
}

const PartnersSLider: React.FC<PartnersSliderProps> = ({ partners }) => {
  return (
    <div className="w-full px-3">
      <Swiper
        {...customSliderOptions}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <Card cardContent={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSLider;
