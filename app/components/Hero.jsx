import React from "react";
import heroimg1 from "../../public/heroImg/hero-1.png";
import Image from "next/image";
import line from "../../public/line.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative  overflow-x-hidden">
      <div>
        <Image
          src={heroimg1}
          alt="heroImg"
          className="lg:h-auto h-[580px] min-w-fit lg:min-w-0"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black from-70%  opacity-50"></div>

      <div className="absolute inset-0">
        <Navbar />

        <div className="text-center xl:text-left absolute space-y-4 xl:top-56 top-32 xl:left-48  xl:w-1/3">
          <Image src={line} alt="line" className="mx-auto xl:mx-0" />
          <h3 className="text-lg">Alex D. Williamson</h3>
          <h1 className="xl:text-[55px] text-[30px] font-bold">
            Creative <br /> Actor / Model
          </h1>
          <p className="xl:text-xl text-lg text-zinc-300 pb-12 xl:px-0 px-3">
            Welcome to my portfolio, if you want, you can have one also, and it
            can look like this.
          </p>
          <Link
            href="https://s7template.com/wp/ruposhi-new/contact/"
            className=""
          >
            <div className="mx-auto xl:mx-0 xl:w-1/3 sm:w-1/4 w-1/3 flex items-center justify-evenly bg-[#BC885D] hover:bg-[#815937]  py-4 font-semibold transition ease-in-out duration-300 delay-100">
              <span>Contact Me</span>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
