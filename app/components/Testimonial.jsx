"use client";
import Image from "next/image";
import React from "react";
import testimonialData from "../utils/testimonial.json";

import ScrollContainer from "react-indiana-drag-scroll";

const Testimonial = () => {
  return (
    <div className="child-wrapper space-y-3 px-16 xl:px-0">
      <p className="heading-2">Testimonials</p>
      <h2 className="heading">Our Happy Client Feedback</h2>

      <ScrollContainer>
        <div className="grid lg:grid-cols-2 gap-9 pt-2">
          {testimonialData?.map(({ id, name, designation, desc, img }) => {
            return (
              <div key={id}>
                <div className="bg-[url('/testimonial/testimonial-bg.png')] bg-repeat px-8 lg:pt-10 py-7 space-y-6 lg:h-80 h-auto">
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
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Testimonial;
