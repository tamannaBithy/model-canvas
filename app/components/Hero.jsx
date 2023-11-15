import React from "react";
import heroimg1 from "../../public/heroImg/hero-1.png";
import Image from "next/image";
import line from "../../public/line.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="testb relative">
      <div className="lg:h-auto h-[500px]">
        <Image src={heroimg1} alt="heroImg" className="object-contain" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black from-70% opacity-50"></div>

      <div className="testb absolute bottom-1/2">
        <Image src={line} alt="line" />
        <h3>Alex D. Williamson</h3>
        <h1 className="heading">
          Creative <br /> Actor / Model
        </h1>
        <p>
          Welcome to my portfolio, if you want, you can have one also, and it
          can look like this.
        </p>
        <Link href="https://s7template.com/wp/ruposhi-new/contact/">
          Contact Me{" "}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
