import SidePanel from './components/SidePanel';
import styled from 'styled-components';
import NewProject from './components/NewProject';
import ProjectBrief from './components/ProjectBrief';
import { useState } from 'react';
import ProjectInfo from './components/ProjectInfo';
const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #dbdbdb;
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

  return (
    <Div>
      <SidePanel setSelectedProject={setSelectedProject} projects = {projects} />
      {selectedProject ? (
      <ProjectInfo
        project={selectedProject}
        selectedProject={selectedProject}
        setProjects={setProjects} // Pass setProjects here
      />
    ) : (
      <NewProject />
    )}
      {/* <NewProject /> */}
    </Div>
  );
}

export default App;
