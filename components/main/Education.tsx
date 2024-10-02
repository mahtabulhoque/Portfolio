"use client";

import React from "react";
import Image from "next/image";

interface EducationProps {
  imageUrl: string;
  institute: string;
  duration: string;
}

const Education: React.FC = () => {
  const educations: EducationProps[] = [
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
    <div id="educations" className="my-10 max-w-[1440px] mx-auto">
      <h1 className="text-white text-2xl lg:text-4xl text-center font-bold mb-8 py-10">
        Education
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 lg:p-0">
        {educations.map((education, index) => (
          <div
            key={index}
            className="relative h-[20rem] flex items-center justify-center transform transition duration-500 hover:scale-105"
          >
            <div className="glass-card text-center text-white p-8 rounded-xl backdrop-blur-lg bg-white/10 shadow-lg border border-white/20 w-full h-full flex flex-col justify-center">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={education.imageUrl}
                  alt={education.institute}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="font-bold text-2xl">
                {education.institute}, Chittagong
              </h2>
              <p className="font-normal text-lg mt-2">{education.duration}</p>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Education;
