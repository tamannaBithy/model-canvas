import Image from "next/image";
import React from "react";
import imgData from "../utils/portfolio.json";

const Portfolio = () => {
  return (
    <div className="child-wrapper space-y-10 p-10 lg:p-4">
      <div className="text-center space-y-3">
        <p className="heading-2">Portfolio</p>
        <p className="heading">Our Portfolio</p>
      </div>

      <div className="md:grid md:grid-cols-3 gap-4 vertical-space">
        {imgData?.map(({ id, img, title, description }) => {
          return (
            <div className="md:col-span-1 " key={id}>
              <div className="text-center space-y-4">
                {/* <div className="relative w-full h-[350px]">
                  <Image
                    className="object-contain"
                    src={img}
                    alt="model"
                    fill
                  />
                </div> */}

                <Image
                  className={`object-contain mx-auto md:mx-0 ${
                    id === 5 ? "md:pt-16" : ""
                  }`}
                  src={img}
                  alt="model"
                  width={350}
                  height={400}
                />
                <h6 className="text-muted text-sm">{title}</h6>
                <h3 className="text-lg font-semibold">{description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
