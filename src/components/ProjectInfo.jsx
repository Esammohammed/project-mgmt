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
    /* 
    add shadow border  
    */
    
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
export default function ProjectInfo({ projects, setProjects, selectedProject }) {
    const newTask = useRef(null);
    function addTask() {
        console.log(newTask.current.value);    
        setProjects((prevProjects) => {
                
                const updatedProjects = [...prevProjects];
                const projectIndex = updatedProjects.findIndex(project => project.id === selectedProject.id);
                updatedProjects[projectIndex].tasks.push(newTask.current.value);
                return updatedProjects;
            });
            
}
    console.log(selectedProject);
    return (

        <Section>   
            <h2>{selectedProject.name}</h2>
            <h3>{selectedProject.description}</h3>
            <h2>Tasks</h2>
            {/* 
            Add a new task 
            */}
        
            <Section>
                <h3>Task Description</h3>
                <textarea ref= {newTask} ></textarea>
                <button onClick={addTask}>Add Task</button>
            </Section>

         
            {selectedProject.tasks.map((task,index) => (
                <div key= {index}>
                    <h3>{task}</h3>
                </div>
            ))}

        </Section>
    );
}
