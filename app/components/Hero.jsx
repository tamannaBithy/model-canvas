import React from "react";
import heroimg1 from "../../public/heroImg/hero-1.png";
import Image from "next/image";
import line from "../../public/line.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src={heroimg1}
          alt="heroImg"
          className="lg:h-auto h-[500px] min-w-fit lg:min-w-0"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black from-70%  opacity-50"></div>

      <div className="absolute space-y-4 top-56 left-48">
        <Image src={line} alt="line" />
        <h3 className="text-lg">Alex D. Williamson</h3>
        <h1 className="lg:text-[55px] text-[35px] font-bold">
          Creative <br /> Actor / Model
        </h1>
        <p className="text-xl text-zinc-300 pb-14">
          Welcome to my portfolio, if you want, you can have one <br /> also,
          and it can look like this.
        </p>
        <Link
          href="https://s7template.com/wp/ruposhi-new/contact/"
          className=""
        >
          <div className="w-1/3 flex items-center justify-evenly bg-[#BC885D] hover:bg-[#815937]  py-5 font-semibold transition ease-in-out duration-300 delay-100">
            <span>Contact Me</span>
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
