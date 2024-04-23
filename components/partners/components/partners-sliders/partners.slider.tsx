"use client";
import React from "react";
import { Partner } from "../../data/partners.data";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { customSliderOptions } from "../../data/slider.options";

interface PartnersSliderProps {
  partners: Partner[];
}

const PartnersSLider: React.FC<PartnersSliderProps> = ({ partners }) => {
  const [domLoaded, setDomLoaded] = React.useState(false);
  React.useEffect(() => {
    setDomLoaded(true);
  });
  return (
    <div className="w-full px-3">
      {domLoaded && (
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
      )}
    </div>
  );
};

export default PartnersSLider;
