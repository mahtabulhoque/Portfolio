"use client";
// import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import Marquee

interface SkillItem {
  name: string;
  src: string;
}

const skills: SkillItem[] = [
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "Javascript", src: "/js.png" },
  { name: "Clerk", src: "/clerk.png" },
  { name: "Next Auth", src: "/nextauth.png" },
  { name: "React.js", src: "/react.png" },
  { name: "ReactIcons", src: "/icons.svg" },
  { name: "Figma", src: "/figma.png" },
  { name: "MUI", src: "/mui.png" },
  { name: "Tailwind CSS", src: "/tailwind.png" },
  { name: "Next.js", src: "/next1.png" },
  { name: "Framer Motion", src: "/framer.png" },
  { name: "TypeScript", src: "/ts.png" },
  { name: "Node.js", src: "/nodes.png" },
  { name: "Express.js", src: "/express.png" },
  { name: "Firebase", src: "/Firebase.png" },
  { name: "GitHub", src: "/gitwhite.png" },
  { name: "Stripe", src: "/stripe.webp" },
  { name: "Vercel", src: "/Vercel.png" },
  { name: "MongoDB", src: "/mongodb.png" },
];

const Skill: React.FC = () => {
  return (
    <div id="skills" className="max-w-[1440px] mx-auto text-white overflow-hidden">
      {/* Skills Section */}
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-12">Skills</h2>

      {/* Marquee */}
      <Marquee gradient={false} speed={25}>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mx-8">
            <div className="w-20 h-20 flex items-center justify-center mb-2">
              <Image
                src={skill.src}
                alt={skill.name}
                width={60}
                height={60}
                priority={true}
              />
            </div>
            <span className="text-sm md:text-md text-center">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skill;
