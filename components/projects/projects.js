import React, {useEffect} from 'react';
import Link from 'next/link';
import projectsData from '../../data/projects.json';
import ProjectDetail from '../project-detail/project-detail';
import Title from '../title/title';
import { Container, ProjectsWrapper, ContentWrapper, GridContainer } from './projects.style';

const Projects = React.forwardRef((props, ref) => {  

  return (
    <Container data-scroll-section data-scroll-speed={-1} ref={ref} id="projects">
      <Title subtitle="Take a look at my" title="projects"/>
      <ContentWrapper>
        <ProjectsWrapper>
          {projectsData.map(project => (
            <GridContainer key={project.id}>
              <ProjectDetail project={project}/>
            </GridContainer>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
    </Container>
  );
})


export default Projects;