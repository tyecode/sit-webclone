import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

import Img1 from "../Assets/Images/Carousel/about-carousel-1.jpg";
import Img2 from "../Assets/Images/Carousel/about-carousel-2.jpg";
import Img3 from "../Assets/Images/Carousel/about-carousel-3.jpg";
import Img4 from "../Assets/Images/Carousel/about-carousel-4.jpg";
import Img5 from "../Assets/Images/Carousel/about-carousel-5.jpg";
import Img6 from "../Assets/Images/Carousel/about-carousel-6.jpg";
import Img7 from "../Assets/Images/Carousel/about-carousel-7.jpg";
import Img8 from "../Assets/Images/Carousel/about-carousel-8.jpg";

const AboutCarousel = () => {
  const swiperRef = useRef();

  return (
    <div className="about-carousel">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        speed={800}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img8} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutCarousel;
