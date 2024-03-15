// NewProject.js
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
    background-color: #f3f4f6;
    padding: 1rem;
    width: 100%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    border-radius: 20px;
    
    h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    button {
        background-color: #2a2a2a;
        color: white;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 5px;
        font-size: 1rem;
    }
`;

export default function NewProject({ addNewProject }) {
    const projectName = useRef();
    const projectDescription = useRef();
    const projectDate = useRef();

    function addProject () {
        if (!projectName.current.value || !projectDescription.current.value || !projectDate.current.value) {
            alert("Please fill out all fields");
            return;
        }
        const newProject = {
            id: Date.now(), // Assign a unique ID, for example using Date.now()
            name: projectName.current.value,
            description: projectDescription.current.value,
            projectDate: projectDate.current.value,
            tasks: []
        };
        addNewProject(newProject);
    };
 

    return (
        <Section>
            <h3>Project Name</h3>
            <input type="text" ref={projectName} required />
            <h3>Project Description</h3>
            <textarea ref={projectDescription} required  ></textarea>
            <h3>Project Date</h3>
            <input type="date" ref={projectDate} required  />
            <button onClick={addProject}>Save Project</button>
        </Section>
    );
}
