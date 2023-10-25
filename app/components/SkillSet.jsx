import Image from "next/image";
import React from "react";
import skill from "../../public/skill.png";

const SkillSet = () => {
  return (
    <div className=" bg-black">
      <div className="skills-container">
        <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
          <p className="heading-2">Skillset</p>
          <p className="heading">Work will say about my skillset.</p>
          <Image className="pt-10" src={skill} alt="skill" />
        </div>
        <div className="lg:col-span-5 p-4 testb">
          <div className="grid grid-cols-8">
            <div className="bg-[#BC885D] py-7 col-span-5">
              <p className="pl-5 font-bold text-lg">Acting</p>
            </div>
            <hr className="col-span-2 my-auto border-2 border-[#1F1F1F]" />
            <div className="col-span-1 my-auto pl-5">
              <p className="font-bold text-lg">75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
