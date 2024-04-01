"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderItem {
  imgURL: string;
  label?: string;
  link: string;
}

const CustomSlider = () => {
  const slides: SliderItem[] = [
    {
      imgURL:
        "https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
      label: "Возможность стать резидентом",
      link: "/link",
    },
    {
      imgURL:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KDMx1YspSrBcFJG-NDZgDg.png",
      label: "-10% на все услуги",
      link: "/link",
    },
  ];

  return (
    <div>
      <Carousel showArrows={true} autoPlay={true}>
        {slides.map((slide, index) => (
          <Link href={slide.link} target="_blank" key={index}>
            <img src={slide.imgURL} alt="" />
            <p className="legend">{`${slide.label}. Нажмите сюда чтобы узнать больше.`}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
