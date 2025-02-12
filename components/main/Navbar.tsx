'use client'
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "About", target: "/" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  // { name: "Blogs", target: "blogs" },
  { name: "Contact", target: "contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed z-[50] top-8 w-full mx-auto flex justify-center items-center">
    <ul className="flex flex-wrap gap-5 sm:gap-4 md:gap-6 lg:gap-10 bg-gradient-to-r from-gray-800 px-4 sm:px-6 md:px-8 lg:px-10 py-3 rounded-full text-white shadow-lg backdrop-blur-md border border-purple-500">
      {links.map((link) => (
        <li className="cursor-pointer" key={link.name}>
          <ScrollLink
            to={link.target}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-sm sm:text-base md:text-lg lg:text-xl"
          >
            {link.name}
          </ScrollLink>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default Navbar;
