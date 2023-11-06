import Image from "next/image";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Experience = () => {
  const imgData = [
    {
      id: 1,
      imgSrc: "/experience/img-1.png",
    },
    {
      id: 2,
      imgSrc: "/experience/img-2.png",
    },
    {
      id: 3,
      imgSrc: "/experience/img-3.png",
    },
    {
      id: 4,
      imgSrc: "/experience/img-4.png",
    },
    {
      id: 5,
      imgSrc: "/experience/img-2.png",
    },
    {
      id: 6,
      imgSrc: "/experience/img-5.png",
    },
    {
      id: 7,
      imgSrc: "/experience/img-6.png",
    },
    {
      id: 8,
      imgSrc: "/experience/img-7.png",
    },
    {
      id: 9,
      imgSrc: "/experience/img-8.png",
    },
    {
      id: 10,
      imgSrc: "/experience/img-9.png",
    },
  ];

  return (
    <div className="bg-[url('/video.png')] bg-no-repeat">
      <div className="text-center lg:py-24 py-10 lg:space-y-10 space-y-5">
        <div className="mx-auto lg:w-52 lg:h-52 w-40 h-40 rounded-full border-4 border-white flex items-center justify-center">
          <div
            className="lg:w-32 lg:h-32 w-24 h-24 rounded-full bg-white hover:bg-secondary cursor-pointer transition-colors  delay-100
            relative text-black hover:text-white"
          >
            <p className="text-center  lg:text-3xl text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BiSolidRightArrow />
            </p>
          </div>
        </div>

        <h2 className="heading px-2 lg:px-0">
          Our experience allows to bring disruptive
        </h2>

        <div className="grid lg:grid-cols-5 grid-cols-2 lg:px-32">
          {imgData?.map(({ id, imgSrc }) => {
            return (
              <div
                className={` ${
                  id < 6 && "lg:border-b lg:border-b-[#ffffff14]"
                } ${
                  id !== 5 && id !== 10 && "lg:border-r lg:border-r-[#ffffff14]"
                } `}
                key={id}
              >
                <div className="col-span-1 relative lg:h-[140px] h-[100px] w-[110px] mx-auto">
                  <Image
                    className="object-contain "
                    src={imgSrc}
                    alt="company"
                    fill
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
