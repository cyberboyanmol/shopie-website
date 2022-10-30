import React, { useRef } from "react";
import Product from "../../Product/Product";
import SwiperCore, { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@mui/material";
const RecentlyViewedSlider = ({ product, title }) => {
  SwiperCore.use([Autoplay]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  console.log(navigationNextRef);
  console.log(navigationPrevRef.current);
  return (
    <div className="recommendedSlider">
      <div className="recommendedSlider_top">
        <span className="heading">{title}</span>
        <div className="sliderBtn">
          <Button
            sx={{
              "&:hover": { background: "#00BADB", opacity: 0.7 },
              backgroundColor: `#00BADB`,
            }}
            variant="contained"
            ref={navigationPrevRef}
          >
            <MdKeyboardArrowLeft className="icon" />
          </Button>
          <Button
            sx={{
              "&:hover": { background: "#00BADB", opacity: 0.7 },
              backgroundColor: `#00BADB`,
            }}
            variant="contained"
            ref={navigationNextRef}
          >
            <MdKeyboardArrowRight className="icon" />
          </Button>
        </div>
      </div>
      <Swiper
        freeMode={true}
        modules={[Navigation, FreeMode, Autoplay]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
        className="Recently__Viewed__Slider"
      >
        {product.map((productItem, index) => {
          return (
            <SwiperSlide key={index}>
              <Product product={productItem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecentlyViewedSlider;
