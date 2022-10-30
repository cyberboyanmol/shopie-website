import React, { useState, useRef } from "react";
import SwiperCore, { Autoplay, EffectCoverflow, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/scss/pagination";
import "./ProductSlider.scss";
import "swiper/css/effect-fade";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

import ReactImageMagnify from "react-image-magnify";
const ProductSlider = () => {
  const [activeThumb, setActiveThumb] = useState();
  SwiperCore.use([Autoplay]);

  const images = [
    "https://i.imgur.com/pcpyClR.jpg",
    "https://i.imgur.com/oP9OYoL.jpg",
    "https://i.imgur.com/zQwcCYq.jpg",
    "https://i.imgur.com/1MnNZE3.jpg",
    "https://i.imgur.com/vCQFIko.jpg",
    "https://i.imgur.com/1MnNZE3.jpg",
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="productSlider">
      <div className="productSlider_left">
        <div className="prev" ref={navigationPrevRef}>
          <IoChevronUp />
        </div>
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          spaceBetween={30}
          direction={"vertical"}
          slidesPerView={5}
          modules={[Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="product_image_slider_thumbs"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product_image_slider_thumbs_wrapper">
                <img src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next" ref={navigationNextRef}>
          <IoChevronDown />
        </div>
      </div>
      <div className="product_image_div">
        <Swiper
          loop={true}
          spaceBetween={0}
          modules={[Navigation, EffectCoverflow, Pagination, Thumbs, Autoplay]}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          //   effect="coverflow"
          pagination={{ clickable: true }}
          thumbs={{ swiper: activeThumb }}
          className="productSlider__image"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="product images" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="sharebtn">
          <FiShare />
        </span>
      </div>

      <div className="mobile_slider_div">
        <Swiper
          loop={true}
          spaceBetween={0}
          modules={[Navigation, EffectCoverflow, Pagination, Thumbs, Autoplay]}
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          //   effect="coverflow"
          pagination={{ clickable: true }}
          thumbs={{ swiper: activeThumb }}
          className="mobile_slider_image"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="product images" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="sharebtn">view similiar</span>
      </div>
    </div>
  );
};

export default ProductSlider;
