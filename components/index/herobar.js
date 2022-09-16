import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLocationSharp } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";

export default function App() {
  return (
    <>
      <div className="flex relative min-h-screen z-0">
        <Swiper
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <div className="">
              <img
                object-fit="cover"
                className="h-[54rem] w-full"
                src="https://res.cloudinary.com/uizhen-tech/image/upload/v1663244616/1_vvxxph.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[54rem] w-full"
              src="https://res.cloudinary.com/uizhen-tech/image/upload/v1663244621/3_cr1kor.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[54rem] w-full"
              src="https://res.cloudinary.com/uizhen-tech/image/upload/v1663244627/2_fght11.jpg"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex absolute w-full h-full">
          <span className="absolute z-10 w-full top-0 h-[50rem] bg-gradient-to-b from-black opacity-[0.5]"></span>
          <span className="absolute z-10 w-full h-[50rem] bottom-0 bg-gradient-to-t from-black opacity-[0.5]"></span>
          <div className="z-20 absolute w-full h-full flex">
            <div className="mx-[2rem] lg:mx-[12rem] w-full">
              <div className="w-full h-full flex flex-col justify-end pb-[10rem]">
                <div className="flex">
                  <div className="flex items-center mr-5">
                    <div className="w-10">
                      <IoLocationSharp size={"100%"} />
                    </div>
                    <h1 className="text-[18px]">Shangri-La, Ulaanbaatar</h1>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10">
                      <BiCalendar size={"100%"} />
                    </div>
                    <h1 className="text-[18px]">2022.09.07-08</h1>
                  </div>
                </div>
                <b className="text-[48px]">COAL MONGOLIA 2022</b>
                <h1 className="font-[400] text-[18px]">
                  Нүүрсний салбарын худалдаа, хөрөнгө оруулалтын олон улсын
                  чуулга уулзалт, үзэсгэлэн
                </h1>
                <div className="pt-16 w-full  grid grid-cols-2 lg:flex md:flex  gap-20 items-center">
                  <img
                    className="w-[6rem]"
                    src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/100Ann_l.png"
                  />
                  <img
                    className="w-[6rem]"
                    src="http://www.coalmongolia.mn/wp-content/uploads/2022/07/nuurs.webp"
                  />
                  <img
                    className="w-[10rem]"
                    src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/sxcoal-Logo.png"
                  />
                  <img
                    className="w-[10rem]"
                    src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/CC-white.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
