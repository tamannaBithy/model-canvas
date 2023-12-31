import Image from "next/image";
import React from "react";
import biography from "../../public/biography.png";
import line from "../../public/line.png";
import Description from "./Description";

const Biography = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:space-x-14 child-wrapper">
      <Image
        className="img-container"
        src={biography}
        alt="biography"
      />

      <div className="mt-5 lg:mt-0 p-4 space-y-3 text-decoration">
        <h5 className="heading-2">Biography</h5>
        <h2 className="heading text-white">Meet With Me Again</h2>
        <Description> Are you a photographer and want to get more customers? You need a
          portfolio now! Our expert tells you how to build the best website for
          Photographers!</Description>

        <div className="lg:flex lg:justify-evenly space-x-5 pt-10">
          <div className="space-y-4">
            <p className="text-xl font-semibold">Experience</p>
            <Image  className="img-container" src={line} alt="line" />

            <div className="space-y-9 pt-5">
              <div className="space-y-2">
                <p className="font-bold">
                  Vinod Ad Farm{" "}
                  <span className="text-secondary">(2000 - 2005)</span>
                </p>
                <p className="text-muted">
                  Our Experience you how to build the best website for
                  Photographers!
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold">
                  Vinod Ad Farm{" "}
                  <span className="text-secondary">(2000 - 2005)</span>
                </p>
                <p className="text-muted">
                Expert tells you how to build the best website for Photographers!
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3 pt-5 lg:pt-0">
          <div className="space-y-4">
            <p className="text-xl font-semibold">Education</p>
            <Image className="img-container" src={line} alt="line" />

            <div className="space-y-9 pt-5">
              <div className="space-y-2">
                <p className="font-bold">
                  Vinod Ad Farm{" "}
                  <span className="text-secondary">(2000 - 2005)</span>
                </p>
                <p className="text-muted">
                Tells you how to build the best website for Photographers!
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold">
                  Vinod Ad Farm{" "}
                  <span className="text-secondary">(2000 - 2005)</span>
                </p>
                <p className="text-muted">
                  Our Experience you how to build the best website for
                  Photographers!
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
