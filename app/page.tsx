import Education from "@/components/main/Education";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skill from "@/components/main/Skill";
import React from "react";

const Homepage = () => {
  return (
    <main className="w-full h-full">
      <Hero />
      <div className="">
      <Skill />
      </div>

      <div className="max-w-[1440px] mx-auto">
      <Projects />
      </div>
      <div>
        <Education/>
      </div>
    </main>
  );
};

export default Homepage;
