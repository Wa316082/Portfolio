import React from "react";
import { project1, project2 } from "../../../assets";
import Title from "../../Home/Title";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div>
      <Title title='Recent' subtitle='Projects' />
      <div>
        <div className="w-full grid grid-cols-2 gap-10 ">
        <div className="px-6 ">
            <ProjectCard title='Ebaei Express' category='Website' image={project1} link="http://baeiexpress.e-deshltd.com/" />
          </div>
        <div className="px-6 ">
            <ProjectCard title='E-desh Agreegator' category='Website' image={project2} link="http://edeshtheke.e-deshltd.com" />
          </div>
        <div className="px-6 ">
            <ProjectCard title='Ebaei Express' category='Website' image={project1} link="http://baeiexpress.e-deshltd.com/" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
