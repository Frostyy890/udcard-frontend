"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderItem {
  url: string;
}

const CustomSlider = () => {
  const images: SliderItem[] = [
    {
      url: "https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
    },
    {
      url: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KDMx1YspSrBcFJG-NDZgDg.png",
    },
  ];

  return (
    <div>
      <Carousel dynamicHeight={true} showArrows={true} autoPlay={true}>
        {images.map((image, index) => (         
          <img src={image.url} alt="" key={index}></img>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
