import Image from "next/image";
import React from "react";
import biography from "../../public/biography.png";
import line from "../../public/line.png";

const Biography = () => {
  return (
    <div className="h-margin md:flex md:justify-between md:items-center md:space-x-14">
      <Image
        className="testb mx-auto md:mx-0"
        src={biography}
        alt="biography"
      />

      <div className="testb p-4 space-y-3">
        <p className="text-secondary underline">Bio Graphy</p>
        <p className="text-[45px] font-extrabold pb-4">Meet With Me Again</p>
        <p className="text-muted">
          Are you a photographer and want to get more customers? You need a
          portfolio now! Our expert tells you how to build the best website for
          Photographers!
        </p>

        <div className="md:flex md:justify-evenly space-x-5 pt-4">
          <div className="space-y-4">
            <p className="text-xl font-semibold">Experience</p>
            <Image src={line} alt="line" />

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
                <p>
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
          <div className="space-y-3">
          <div className="space-y-4">
            <p className="text-xl font-semibold">Education</p>
            <Image src={line} alt="line" />

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
                <p>
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
