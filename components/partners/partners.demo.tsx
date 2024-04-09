"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { partnersData } from "./data/partners.data";

const PartnersHome = () => {
  const { categories } = partnersData;
  return (
    <section id="partners" className="py-4">
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 py-2">
        Наши партнеры:
      </h1>
      <div className="h-[20rem] md:h-[40rem] text-gray-900 px-4">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          autoplay={true}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link href={`/partners#${category.path}`}>{category.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersHome;
