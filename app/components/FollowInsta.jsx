"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

const FollowInsta = () => {
  const [isHovered, setIsHovered] = useState(false);

  const igData = [
    {
      id: 1,
      imgSrc: "/insta/ig-1.png",
    },
    {
      id: 2,
      imgSrc: "/insta/ig-2.png",
    },
    {
      id: 3,
      imgSrc: "/insta/ig-3.png",
    },
    {
      id: 4,
      imgSrc: "/insta/ig-4.png",
    },
    {
      id: 5,
      imgSrc: "/insta/ig-5.png",
    },
    {
      id: 6,
      imgSrc: "/insta/ig-6.png",
    },
    {
      id: 7,
      imgSrc: "/insta/ig-3.png",
    },
    {
      id: 8,
      imgSrc: "/insta/ig-5.png",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-4 relative">
      <Slider {...sliderSettings}>
        {igData?.map(({ id, imgSrc }) => {
          return (
            <div
              key={id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className=" instaImg cursor-pointer relative xl:h-[215px] md:h-[130px] h-[180px]  w-auto mx-auto  transition ease-in-out duration-700 hover:brightness-50 hover:scale-105">
                <Image src={imgSrc} alt="brands" fill />

                {isHovered && (
                  <div className="overlay flex flex-col justify-between my-4">
                    <p className="text-xs text-center">roposhisen007</p>

                    <div className="flex justify-end items-end mr-4 gap-11">
                      <div className="text-sm flex justify-center items-center gap-2">
                        <AiOutlineClockCircle />
                        <p>Apr 14</p>
                      </div>
                      <FiInstagram className="xl:text-3xl text-xl" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="absolute w-56 lg:h-14 h-12  bg-[#BC885D] flex items-center justify-evenly top-1/3 md:right-1/3 right-0  cursor-pointer hover:bg-[#815937] transition ease-in-out duration-300 delay-100">
        <FiInstagram />
        <p className="font-medium">Follow on Instagram</p>
      </div>
    </div>
  );
};

export default FollowInsta;
