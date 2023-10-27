"use client";

import React from "react";

const ProgressBar = () => {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="bg-[#BC885D] py-6 col-span-5">
          <p className="progress-text pl-6">Acting</p>
        </div>
        <hr className="col-span-2 my-auto border-2 border-[#1F1F1F]" />
        <div className="col-span-1 my-auto pl-5">
          <p className="progress-text">75%</p>
        </div>
      </div>

      <div className="grid grid-cols-8">
        <div className="bg-[#BC885D] py-6 col-span-4">
          <p className="progress-text pl-6">Dancing</p>
        </div>
        <hr className="col-span-3 my-auto border-2 border-[#1F1F1F]" />
        <div className="col-span-1 my-auto pl-5">
          <p className="progress-text">60%</p>
        </div>
      </div>

      <div className="grid grid-cols-9">
        <div className="bg-[#BC885D] py-6 col-span-4">
          <p className="progress-text pl-6">Reciting</p>
        </div>
        <hr className="col-span-4 my-auto border-2 border-[#1F1F1F]" />
        <div className="col-span-1 my-auto pl-5">
          <p className="progress-text">58%</p>
        </div>
      </div>

      <div className="grid grid-cols-8">
        <div className="bg-[#BC885D] py-6 col-span-6">
          <p className="progress-text pl-6">Observation</p>
        </div>
        <hr className="col-span-1 my-auto border-2 border-[#1F1F1F]" />
        <div className="col-span-1 my-auto pl-5">
          <p className="progress-text">91%</p>
        </div>
      </div>

      <div className="grid grid-cols-8">
        <div className="bg-[#BC885D] py-6 col-span-3">
          <p className="progress-text pl-6">Singing</p>
        </div>
        <hr className="col-span-4 my-auto border-2 border-[#1F1F1F]" />
        <div className="col-span-1 my-auto pl-5">
          <p className="progress-text">50%</p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
