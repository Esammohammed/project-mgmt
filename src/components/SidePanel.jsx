import { useState } from "react";
import styled from "styled-components";
import ProjectBrief from "./ProjectBrief";

const Section = styled.section`
    background-color: #1C1D1F;
    padding: 2rem;
    width: 25%;
    height: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-right: 2rem;

    h2 {
        color: #d2d2d2;
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
    }

    button {
        background-color: #2a2a2a;
        color: #d2d2d2;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 5px;
        font-size: 1rem;
    }
`;




export default function SidePanel({ setSelectedProject, projects}) {
    


 

    return (
        <Section>
            <h2>Your Projects</h2>
            <button >New Project</button>
            {projects.map((project) => (
                <ProjectBrief
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                />
            ))}
        </Section>
    );
}
