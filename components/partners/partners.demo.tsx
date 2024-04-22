"use client";
import { Link } from "@/i18n";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { partnersData } from "./data/partners.data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

const PartnersDemo = () => {
  const t = useTranslations("First_Page.Partners");
  const { categories } = partnersData;
  return (
    <section id="partners" className="py-4">
      <h1 className="md:text-4xl text-2xl font-bold text-center md:py-6 py-2">
        {t("header")}
      </h1>
      <div className="h-[20rem] md:h-[40rem] px-4">
        <Swiper
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          autoplay={true}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link href={`/partners#${category.path}`}>
                <Image
                  width={0}
                  height={0}
                  alt=""
                  src={category.img ? category.img : ""}
                  className="bg-contain h-full w-full relative"
                />
                <h1
                  style={{
                    textShadow:
                      "-1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000, -1px -1px 0 #000",
                  }}
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200 font-bold md:text-5xl text-3xl"
                >
                  {category.name}
                </h1>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersDemo;
