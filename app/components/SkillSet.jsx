import Image from "next/image";
import React from "react";
import skill from "../../public/skill.png";
import Progressbar from "./ProgressBar";

const SkillSet = () => {
  return (
    <div className=" bg-black">
      <div className="lg:mx-44 lg:grid lg:grid-cols-9 lg:gap-x-10 pt-20">
        <div className="lg:col-span-4 space-y-2">
          <p className="heading-2">Skillset</p>
          <p className="heading">Work will say about my skillset.</p>
          <Image className="pt-10" src={skill} alt="skill" />
        </div>
        <div className="lg:col-span-5 p-5">
          <Progressbar />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
