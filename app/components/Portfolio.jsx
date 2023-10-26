import Image from "next/image";
import React from "react";
import zaz from "../../public/zaz.png";
import award from "../../public/award.png";
import most from "../../public/most.png";
import ladai from "../../public/ladai.png";
import hestings from "../../public/hestings.png";
import recites from "../../public/recites.png";
import imgData from "../utils/portfolio.json";


const Portfolio = () => {
  return (
    <div className="testb h-margin space-y-10 p-4">
      <div className="text-center space-y-3">
        <p className="heading-2">Portfolio</p>
        <p className="heading">Our Portfolio</p>
      </div>

    

      <div className="grid grid-cols-3 gap-4">
        {imgData?.map(({id, img, title, description}) => {
          return (
            <div className="col-span-1 testb" key={id}>
              <div className="text-center space-y-4">
                <div className="testb relative w-full h-[350px]">
                  <Image
                    className="object-contain"
                    src={img}
                    alt="model"
                    fill
                  />
                </div>
                <h3>{title}</h3>
                <h3>{description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
