'use client'
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "About", target: "/" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Educations", target: "educations" },
  { name: "Blogs", target: "blogs" },
  { name: "Contact", target: "contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed z-[50] top-10 w-full mx-auto flex justify-center items-center">
      <ul className="flex flex-wrap gap-2  md:gap-8 lg:gap-10 bg-gradient-to-r from-purple-900 to-indigo-900 px-5 py-5 md:px-10 md:py-5 rounded-full text-white shadow-lg backdrop-blur-md bg-transparent">
        {links.map((link) => (
          <li className="cursor-pointer" key={link.name}>
            <ScrollLink
              to={link.target}
              smooth={true}
              offset={-100}
              duration={500}
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
