"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const words = [
    {
      text: "Web-Developer,",
      className: "text-blue-500 dark:text-blue-500 text-xl",
    },
    {
      text: "Tech-Learner,",
      className: "text-white dark:text-gray-500 text-xl",
    },
    {
      text: "Writer,",
      className: "text-white dark:text-gray-500 text-xl",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-10 rounded-lg shadow-lg mx-4 md:mx-10 my-32 lg:my-40">
      {/* Text Section */}
      <motion.div
        className="text-center md:text-left mt-6 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg lg:text-2xl p-3 lg:p-0 max-w-md font-bold">
          Hey, I am Mahtabul Hoque Chowdhury,
        </p>
        <TypewriterEffectSmooth words={words} />
        <p className="text-sm lg:text-xl p-3 lg:p-0 max-w-md">
          a passionate web developer skilled in both front-end and back-end
          technologies. I have expertise in HTML, CSS, JavaScript, and popular
          frameworks like React, Next.Js .I am a passionate specializing in
          creating modern, responsive web applications. Explore my projects and
          skills.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src={"/me5.png"}
          alt="Profile"
          width={500}
          height={800}
          className="rounded-lg shadow-md"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
