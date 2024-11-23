"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandDcos,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMailgun,
  IconBrandX,
  IconHome,
  
} from "@tabler/icons-react";
const FloatingDocs = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My-Resume",
      icon: (
        <IconBrandDcos className="h-full w-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href:'https://drive.google.com/file/d/1tkQk1dnfklQAvUebO1W2XNMMvNUCFCoy/view?usp=drive_link',
    },
    {
      title: "Email to Me",
      icon: (
        <IconBrandMailgun className="h-full w-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href:"mailto:mahach0396@gmail.com",
    },
   
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/mahtabulhoque.chy.5",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mahtabul-hoque-chowdhury-8b8738255",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/7Mahach5",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full  text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/mahtabulhoque",
    }
  ];
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-[5rem] w-full">
      <FloatingDock mobileClassName="translate-y-5" items={links} />
    </div>
  );
};

export default FloatingDocs;
