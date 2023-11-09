"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Award = () => {
  const brandData = [
    {
      id: 1,
      brandSrc: "/brands/brand-1.png",
    },
    {
      id: 2,
      brandSrc: "/brands/brand-2.png",
    },
    {
      id: 3,
      brandSrc: "/brands/brand-3.png",
    },
    {
      id: 4,
      brandSrc: "/brands/brand-4.png",
    },
    {
      id: 5,
      brandSrc: "/brands/brand-5.png",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="child-wrapper">
      <Slider {...sliderSettings}>
        {brandData?.map(({ id, brandSrc }) => {
          return (
            <div
              className="lg:mt-12 mt-8 relative h-[110px] lg:h-[85px] w-[20px] mx-auto"
              key={id}
            >
              <Image
                src={brandSrc}
                alt="brands"
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Award;
