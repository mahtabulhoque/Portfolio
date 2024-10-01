import Blogs from "@/components/main/Blogs";
import Education from "@/components/main/Education";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skill from "@/components/main/Skill";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";


const Homepage = () => {
  return (
    <main className="w-full h-full">
      <Hero />
      
      <Skill />
      

      <div className="max-w-[1440px] mx-auto">
      <Projects />
      </div>
    
        <Education/>
        <Blogs/>
     
      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default Homepage;
