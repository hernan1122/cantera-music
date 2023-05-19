import React from "react";
import { HomeSliderSongOne } from "./HomeSliderSongOne";
import { HomeSliderSongTwo } from "./HomeSliderSongTwo";
import { HomeSliderSongThree } from "./HomeSliderSongThree";
import "../styles/HomeSwiperSlider.css";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

export function HomeSwiperSlider({ api }) {
  return (
    <Swiper
      className="HomeSliderSong"
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <HomeSliderSongOne api={api} />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSliderSongTwo api={api} />
      </SwiperSlide>
      <SwiperSlide>
        <HomeSliderSongThree api={api} />
      </SwiperSlide>
    </Swiper>
  );
}
