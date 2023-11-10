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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-4">
      <Slider {...sliderSettings}>
        {igData?.map(({ id, imgSrc }) => {
          return (
            <div
              className="instaImg relative xl:h-[215px] md:h-[130px] h-[180px]  w-auto mx-auto cursor-pointer hover:brightness-50 transition ease-in "
              key={id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image src={imgSrc} alt="brands" fill />

              {isHovered && (
                <div className="testb overlay space-y-36 text-white">
                  <p className="text-xs text-center mt-3">roposhisen007</p>

                  <div className="flex justify-end items-end mr-3  gap-11">
                    <div className="text-sm flex justify-center items-center gap-2">
                      <AiOutlineClockCircle />
                      <p>Apr 14</p>
                    </div>
                    <FiInstagram className="text-3xl" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FollowInsta;
