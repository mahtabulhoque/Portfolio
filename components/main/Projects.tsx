"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

// Interface for project data
interface Project {
  id: number;
  name: string;
  live_link: string;
  github_link: string;
  image: string;
  description: string;
}

// Sample projects with descriptions
const projects: Project[] = [
  {
    id: 1,
    name: "Pro Survey",
    live_link: "https://b9a12-assignment-project.web.app/",
    github_link: "https://github.com/mahtabulhoque/B9A12-Pro-Client-Site",
    image: "/Pro-Survey.png",
    description: "Pro Survey is a powerful survey tool that allows Surveyor to create Survey and admin  can distribute surveys easily also user can participate surveying. There is also implement payment system. Pro user can take the hidden benifits.Built with- React, Tailwind css, Framer-motion, Daisy UI, mongodb, CRUD operation, react-icon, Firebase,Stripe for payment, github etc",
  },
  {
    id: 2,
    name: "JobQuestHub",
    live_link: "https://b9a11-assignment-748f9.web.app/",
    github_link: "https://github.com/mahtabulhoque/B9A11-Pro-Client-Site",
    image: "/Job Quest Hub.png",
    description: "JobQuestHub is an innovative platform connecting job seekers with employers in a seamless way. Built using React, Node.js, MongoDB, JWT, Framer Motion, Firebase, Daisy UI, and Tailwind CSS and many more.",
  },  
  {
    id: 3,
    name: "Eco Artisan",
    live_link: "https://b9a10-assignment-ccb90.web.app/",
    github_link: "https://github.com/username/art-craft-showcase",
    image: "/Eco Artisan.png",
    description: "Eco Artisan showcases eco-friendly products such as potery,clay made pod, sclupture, created by artisans, promoting sustainable practices and user can add their favourite goods also can deleting. Built with- React, Tailwind css, Framer-motion, Daisy UI, mongodb, CRUD operation, react-icon, Firebase,github etc",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold text-center text-white mb-8">My Recent Projects</h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-[#030014] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {project.name}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${project.name} thumbnail`}
                />
                 {/* Button to open modal */}
              <button
                className="p-2 rounded-lg my-2 bg-purple-900 text-white hover:bg-purple-500"
                onClick={() => handleOpenModal(project)}
              >
                Details
              </button>
              </CardItem>
              <div className="flex justify-between items-center mt-4 text-blue-500">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.live_link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-[15px] font-normal dark:text-white"
                >
                  Live Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.github_link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-blue-500 text-[15px]  font-bold"
                >
                  GitHub
                </CardItem>
              </div>
             
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Modal for Project Description */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 shadow-lg max-w-md mx-auto backdrop-blur-md bg-white/30 border border-white/20">
            <h3 className="text-3xl font-bold mb-2 text-blue-500">{selectedProject.name}</h3>
            <p className="mb-4 text-xl">{selectedProject.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-600"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
