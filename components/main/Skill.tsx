'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  { name: "Framer Motion", src: "/Framer.png" },
  { name: "TypeScript", src: "/ts.png" },
  { name: "Node.js", src: "/nodes.png" },
  { name: "Express.js", src: "/express.png" },
  { name: "Firebase", src: "/Firebase.png" },
  { name: "GitHub", src: "/gitwhite.png" },
  { name: "Stripe", src: "/stripe.webp" },
  { name: "Vercel", src: "/vercel.png" },
  { name: "MongoDB", src: "/mongodb.png" },
];

const Skill: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-white">
      {/* Skills Section */}
      <h2 className="text-center text-5xl font-bold mb-12">Skills</h2>
      {/* <Meteors number={3} /> */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,         
              ease: "easeInOut",      
              delay: index * 0.1,   
            }}
            viewport={{ once: false, amount: 0.5 }}  
          >
          
            <div className="w-20 h-20 flex items-center justify-center mb-2">
              <Image
                src={skill.src}
                alt={skill.name}
                width={60}
                height={60}
                priority={true}
              />
            </div>
            
            <span className="text-sm md:text-md">{skill.name}</span>
            
            
          </motion.div>
          
        ))}
      </div>
      
      
    </div>
    
  );
};

export default Skill;
