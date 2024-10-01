import Link from "next/link";
import React from "react";

// Define the type for the links array
type LinkItem = {
  name: string;
  target: string;
};

const links: LinkItem[] = [
  { name: "About", target: "#about" },
  { name: "Skills", target: "#skills" },
  { name: "Projects", target: "#projects" },
  { name: "Educations", target: "#educations" },
  { name: "Blogs", target: "#blogs" },
  { name: "Contact", target: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <div className="fixed z-[50] top-10 w-full mx-auto flex justify-center items-center">
      <ul className="flex flex-wrap gap-2  md:gap-8 lg:gap-10 bg-gradient-to-r from-purple-900 to-indigo-900 px-5 py-5 md:px-10 md:py-5 rounded-full text-white shadow-lg backdrop-blur-md bg-transparent">
        {links.map((link) => (
          <li key={link.target}>
            <Link href={link.target} scroll={false}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
