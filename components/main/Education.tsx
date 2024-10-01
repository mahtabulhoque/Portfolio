"use client";

import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Education = () => {
  const educations = [
    {
      imageUrl: "/school.jpg",
      institute: "Natmura Pukuria High School",
      duration: "2012-2017",
    },
    {
      imageUrl: "/collage.jpg",
      institute: "Islamia College",
      duration: "2017-2019",
    },
    {
      imageUrl: "/versity.jpg",
      institute: "University Of Chittagong",
      duration: "2019-2025",
    },
  ];

  return (
    <div id="educations" className="my-10">
      <h1 className="text-white text-5xl text-center font-bold mb-8 py-10">
        Education
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educations.map((education, index) => (
          <div
            key={index}
            className="h-[20rem] relative flex items-center justify-center"
          >
            <DirectionAwareHover imageUrl={education.imageUrl}>
              <div className="text-center text-white">
                <h2 className="font-bold text-2xl">
                  Institution:
                  <br />
                  {education.institute}, Chittagong
                </h2>
                <p className="font-normal text-lg mt-2">{education.duration}</p>
              </div>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
