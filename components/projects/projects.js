import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import projectsData from '../../data/projects.json';
import ProjectDetail from '../project-detail/project-detail';
import Title from '../title/title';
import { Container, ProjectsWrapper, ContentWrapper, GridContainer } from './projects.style';

// const Projects = React.forwardRef((props, ref) => {  
const Projects = ({ setVisibleSection }) => {
  const [contentRef, inView] = useInView({
    rootMargin: '-100px'
  });
  useEffect(() => {
    if (inView) {
      setVisibleSection('Projects');
    }
  }, [inView]);

  return (
    <Container ref={contentRef} id="projects">
      <Title subtitle="Take a look at my" title="projects" />
      <ContentWrapper>
        <ProjectsWrapper>
          {projectsData.map(project => (
            <GridContainer key={project.id}>
              <ProjectDetail project={project} />
            </GridContainer>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
    </Container>
  );
};


export default Projects;