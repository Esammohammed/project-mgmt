import  styled from "styled-components";

const Button = styled.button` 
    
    background-color: #2a2a2a;
    color: white;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;
    font-size: 1rem;
    & button:hover {
        background-color: #434343;
    }
`

export default function ProjectBrief({ project, setSelectedProject}) {
    function handleClick() {
        // console.log('Project clicked:', project.name);
        setSelectedProject(project)
    }
    return (
        <Button className = 'project-name' key={project.id} onClick={handleClick}>
        {project.name}
        </Button>
    )
}