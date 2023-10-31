import Image from "next/image";
import React from "react";

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
    <div className="bg-[url('/video.png')]">
      <div className="text-center py-20 space-y-10">
        <div className="testb p-10">
          <div class="w-20 h-20 rounded-full border border-blue-500 flex items-center justify-center">
            <div class="w-10 h-10 rounded-full bg-white"></div>
          </div>
        </div>

        <h2 className="heading">Our experience allows to bring disruptive</h2>

        <div className="grid lg:grid-cols-5 px-32">
          {imgData?.map(({ id, imgSrc }) => {
            return (
              <div
                className={` ${id < 6 && "border-b border-b-[#ffffff14]"} ${
                  id !== 5 && id !== 10 && "border-r border-r-[#ffffff14]"
                } `}
                key={id}
              >
                <div className="col-span-1 relative h-[140px] w-[110px] mx-auto">
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
