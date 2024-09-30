import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[50] top-10 w-full mx-auto flex justify-center items-center">
      <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-3 md:px-10 md:py-5 rounded-full text-white shadow-lg backdrop-blur-md bg-transparent">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
