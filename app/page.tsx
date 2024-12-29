// import Blogs from "@/components/main/Blogs";
import Contact from "@/components/main/Contact";
import Education from "@/components/main/Education";
import FloatingDocs from "@/components/main/FloatingDocs";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skill from "@/components/main/Skill";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const Homepage = () => {
  return (
    <main id="/" className="w-full h-full">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Hero/>

      <div className="py-10">
      <FloatingDocs />
      </div>
      
      <Skill />
      
      <div className="max-w-[1440px] mx-auto">
        <Projects />
      </div>
      <Education />
      {/* <Blogs /> */}
      <Contact />
      
      <div>
        <Footer />
      </div>
      <ShootingStars />
      
    </main>
  );
};

export default Homepage;
