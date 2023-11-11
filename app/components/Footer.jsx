import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";
import { AiOutlineBehance } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  const data = [
    {
      id: 1,
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      icon: <BiLogoTwitter />,
    },
    {
      id: 3,
      icon: <AiOutlineBehance />,
    },
    {
      id: 4,
      icon: <AiFillYoutube />,
    },
    {
      id: 5,
      icon: <BiLogoLinkedin />,
    },
  ];

  return (
    <div className="px-5 md:px-16 xl:px-0">
      <div className="child-wrapper bg-black text-center space-y-5 py-32">
        <p className="heading-2">Let’s Work Together</p>
        <p className="md:text-[41px] text-[25px] font-bold md:tracking-wide">
          hello@ruposhi.com
        </p>

        <div className="flex justify-center md:space-x-5 space-x-4  pt-6">
          {data.map(({ id, icon }) => {
            return (
              <div
                className="cursor-pointer relative md:w-16 md:h-16 w-10 h-10 rounded-full border-4 border-muted hover:border-white flex items-center justify-center text-muted hover:text-white hover:transition ease-in duration-700 delay-150"
                key={id}
              >
                <p className="text-center md:text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {icon}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center md:text-base text-sm  text-muted py-7">
        © Copyright 2023 @Ruposhi All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
