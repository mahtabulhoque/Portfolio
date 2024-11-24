"use client";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

interface Project {
  id: number;
  name: string;
  live_link: string;
  github_link: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-white mb-8 my-10">
        My Recent Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-[#030014] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#030014] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
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
                  Live Link →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.github_link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-blue-500 text-[15px] font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
            <ShootingStars />
            <StarsBackground />
          </CardContainer>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 shadow-lg max-w-md mx-auto backdrop-blur-md bg-white/30 border border-white/20">
            <h3 className="text-3xl font-bold mb-2 text-orange-500">
              {selectedProject.name}
            </h3>
            <p className="mb-4 text-xl">{selectedProject.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-orange-600"
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
