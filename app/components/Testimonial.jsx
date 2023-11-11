"use client";
import Image from "next/image";
import React from "react";
import testimonialData from "../utils/testimonial.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className="child-wrapper space-y-3 px-5 md:px-16 xl:px-0">
      <p className="heading-2">Testimonials</p>
      <h2 className="heading">Our Happy Client Feedback</h2>

      <Slider {...sliderSettings}>
        {testimonialData?.map(({ id, name, designation, desc, img }) => {
          return (
            <div key={id} className={styles["slick-slide"]}>
              <div className="bg-[url('/testimonial/testimonial-bg.png')] bg-repeat px-8 lg:pt-10 py-7 space-y-6 lg:h-80 h-auto cursor-grab">
                <q className="tracking-wide lg:text-[18px] lg:leading-10 text-muted">
                  {desc}
                </q>

                <div className="flex items-center gap-5">
                  <Image src={img} alt="reviewer" width={64} height={64} />

                  <div className="space-y-1">
                    <p className="font-semibold tracking-wider">{name}</p>
                    <p className="text-secondary text-sm">{designation}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
