"use client";

import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progressbar = () => {
  return (
    <div className="space-y-6">
      <div>
        <ProgressBar
          barContainerClassName="barContainer"
          completedClassName="barCompleted-1"
          customLabel="Acting"
          labelSize="17px"
         
        />
      </div>
      <div>
        <ProgressBar
          barContainerClassName="barContainer"
          completedClassName="barCompleted-2"
          customLabel="Dancing"
          labelSize="17px"
        />
      </div>

      <div>
        <ProgressBar
          barContainerClassName="barContainer"
          completedClassName="barCompleted-3"
          customLabel="Reciting"
          labelSize="17px"
        />
      </div>
      <div>
        <ProgressBar
          barContainerClassName="barContainer"
          completedClassName="barCompleted-4"
          customLabel="Observation"
          labelSize="17px"
        />
      </div>
      <div>
        <ProgressBar
          barContainerClassName="barContainer"
          completedClassName="barCompleted-5"
          customLabel="Singing"
          labelSize="17px"
        />
      </div>
    </div>
  );
};

export default Progressbar;
