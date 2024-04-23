"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { adSliderSlides } from "./adslider.data";

// STYLES
import "./home.styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [domLoaded, setDomLoaded] = React.useState(false);
  React.useEffect(() => {
    setDomLoaded(true);
  });
  return (
    <section id="#" className="p-4">
      <div className="h-[20rem] md:h-[40rem] bg-white text-gray-900">
        {domLoaded && (
          <Swiper
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            loop={true}
            autoplay={true}
            className="mySwiper"
          >
            {adSliderSlides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Home;
