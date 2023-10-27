import Image from "next/image";
import React from "react";
import skill from "../../public/skill.png";
import ProgressBar from "./ProgressBar";

const SkillSet = () => {
  return (
    <div className=" bg-black">
      <div className=" lg:grid lg:grid-cols-9 lg:gap-x-10 pt-20 vertical-space child-wrapper">
        <div className="lg:col-span-4 space-y-2 text-decoration">
          <p className="heading-2">Skillset</p>
          <p className="heading">Work will say about my skillset.</p>
          <Image className="pt-10 img-container" src={skill} alt="skill" />
        </div>
        <div className="lg:col-span-5 lg:p-4 p-10 lg:space-y-7 space-y-10">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
