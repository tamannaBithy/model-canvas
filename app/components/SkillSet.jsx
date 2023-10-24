import Image from "next/image";
import React from "react";
import skill from "../../public/skill.png";

const SkillSet = () => {
  return (
    <div className=" bg-black">
      <div className="h-margin lg:flex lg:justify-between lg:items-center pt-20">
        <div className="testb">
          <p className="heading-2">Skillset</p>
          <p className="heading">Work will say about my skillset.</p>
          <Image src={skill} alt="skill"/>
        </div>
        <div className="testb">
            <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
