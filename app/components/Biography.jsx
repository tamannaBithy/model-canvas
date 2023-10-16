import Image from "next/image";
import React from "react";
import biography from "../../public/biography.png";

const Biography = () => {
  return (
    <div className="h-margin md:flex md:justify-between md:items-center md:space-x-14">
      <Image className="testb " src={biography} alt="biography"/>

      <div className="testb p-4 space-y-3">
        <p className="text-secondary">Bio Graphy</p>
        <p>Meet With Me Again</p>
        <p>
          Are you a photographer and want to get more customers? You need a
          portfolio now! Our expert tells you how to build the best website for
          Photographers!
        </p>

        <div className="flex justify-between">
          <div className="space-y-3">
          <p>Experience</p>
          <div>
          
            <p>Vinod Ad Farm (2000 - 2005)</p>
            <p>
              Our Experience you how to build the best website for
              Photographers!
            </p>
          </div>
          <div>
          
            <p>Vinod Ad Farm (2000 - 2005)</p>
            <p>
              Our Experience you how to build the best website for
              Photographers!
            </p>
          </div>
         
          </div>
          <div className="space-y-3">
          <p>Education</p>

          <div>
          
            <p>Vinod Ad Farm (2000 - 2005)</p>
            <p>
              Our Experience you how to build the best website for
              Photographers!
            </p>
          </div>

          <div>
          
            <p>Vinod Ad Farm (2000 - 2005)</p>
            <p>
              Our Experience you how to build the best website for
              Photographers!
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
