import React from "react";
import Count from "./Count";

const Funfact = () => {
  return (
    <div className="bg-[url('/lets-work-bg.png')]">
      <div className="child-wrapper space-y-4 p-10">
        <p className="heading-2">Fun Fact</p>
        <h2 className="heading">
          Our portfolio includes some of the region’s most iconic landmarks.
        </h2>

        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-6 gap-2 py-10">
          <Count />
        </div>
      </div>
    </div>
  );
};

export default Funfact;
