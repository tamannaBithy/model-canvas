"use client";
import React from "react";
import CountUp from "react-countup";

const Count = () => {
  const data = [
    {
      id: 1,
      start: 6400,
      end: 7500,
      title: "Project Done",
    },
    {
      id: 2,
      start: 0,
      end: 23,
      title: "Co-Artist",
    },
    {
      id: 3,
      start: 300,
      end: 903,
      title: "Cup Of Coffee",
    },
    {
      id: 4,
      start: 0,
      end: 120,
      title: "Branch Worldwide",
    },
  ];

  return (
    <>
      {data.map(({ id, start, end, title }) => {
        return (
          <div key={id}>
            <CountUp
              className="lg:text-[55px] text-[35px] font-bold"
              start={start}
              end={end}
              duration={25}
            />
            <p className=" text-gray-300">{title}</p>
          </div>
        );
      })}
    </>
  );
};

export default Count;
