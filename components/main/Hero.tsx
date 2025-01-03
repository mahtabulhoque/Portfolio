"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Word {
  text: string;
  className: string;
}

const Hero: React.FC = () => {
  const words: Word[] = [
    {
      text: "Web-Developer,",
      className: "text-blue-500 dark:text-blue-500 text-md lg:text-xl ",
    },
    {
      text: "Tech-Learner,",
      className: "text-white dark:text-gray-500 text-md lg:text-xl ",
    },
    {
      text: "Writer,",
      className: "text-white dark:text-gray-500 text-md lg:text-xl ",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-gradient-to-r text-white md:p-0 lg:p-12 rounded-lg shadow-lg mx-4 md:mx-10 lg:my-40">
      {/* Text Section */}
      <motion.div
        className="md:text-left text-gray-200 mt-6 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 px-3 lg:px-0">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg lg:text-2xl px-3 font-bold">
          Hey, I am Mahtabul Hoque Chowdhury,
        </p>
        <TypewriterEffectSmooth className="px-2" words={words}/>
        <p className="text-lg lg:text-xl px-3 lg:p-0 max-w-2xl">
        Frontend-focused developer with expertise in the MERN stack, specializing in JavaScript, React.js, Next.js, Node.js, and
        MongoDB. Experienced in creating user-centric web applications and collaborating with cross-functional teams.
        Passionate about leveraging innovative technologies to deliver exceptional user experiences and drive business success. I am a passionate developer
        specializing in creating modern, responsive web applications. Explore
        my projects and skills.
        </p>

        
     
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src={"/me5.png"}
          alt="Profile"
          width={500}
          height={800}
          className="rounded-lg shadow-sm object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
