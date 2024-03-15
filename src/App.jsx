// App.js
import SidePanel from './components/SidePanel';
import styled from 'styled-components';
import NewProject from './components/NewProject';
import ProjectBrief from './components/ProjectBrief';
import { useState } from 'react';
import ProjectInfo from './components/ProjectInfo';

const Div = styled.div`
  padding: 2rem;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dbdbdb;
  margin: 0 auto;
`;

function App() {
  let staticData = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a project',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is another project',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a project',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([...staticData]);

  // Function to add a new project
  const addNewProject = (newProject) => {
    setSelectedProject(null )
    setProjects(prevProjects => [...prevProjects, newProject]);
    
   
  };
  function deleteProject (deletedProject){
    console.log(deletedProject)
    setSelectedProject(null)
    setProjects(prevProjects => {
      let updatedProjects = [...prevProjects] 
      updatedProjects = updatedProjects.filter(project => project.id !== deletedProject.id);
      return updatedProjects
    });
    console.log(projects)
  };


  return (
    <Div>
      <SidePanel setSelectedProject={setSelectedProject} projects={projects} />
      {selectedProject ? (
        <ProjectInfo
          selectedProject={selectedProject}
          setProjects={setProjects}
          deleteProject= {deleteProject} // Pass setProjects here
        />
      ) : (
        <NewProject addNewProject={addNewProject} />

      )}
    </Div>
  );
}

export default App;
