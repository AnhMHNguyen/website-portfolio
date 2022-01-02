import { useEffect } from 'react';
import Image from 'next/image';
import CustomButton from '../custom-button/custom-button';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { staggerVariants, fadeInUpVariants } from '../../utils/animate';
import { Container, ContentWrapper, ImageWrapper, Img, Title, Description, ToolsWrapper, ButtonWrapper } from './project-detail.style';

const ProjectDetail = ({ project }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-180px'
  });
  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [inView, animation]);  

  return (
    <Container id={project.id}>
      <ImageWrapper data-scroll className={inView && 'reveal'}>
        <Img url={project.imgUrl} />
      </ImageWrapper>
      <ContentWrapper ref={contentRef} id={project.id} variants={staggerVariants} initial="initial" animate={animation}>
        <Title variants={fadeInUpVariants}>{project.name}</Title>
        <Description variants={fadeInUpVariants}>{project.description}</Description>
        <ToolsWrapper id={project.id} whileHover={{scale: 1.1}} variants={fadeInUpVariants}>
          {project.tools.map((tool, idx) => (
            <Image key={idx} alt={tool} src={`/static/${tool}.svg`} width={36} height={36} />
          ))}
        </ToolsWrapper>
        <ButtonWrapper id={project.id} variants={fadeInUpVariants}>
          <a target="_blank" href={project.demoUrl} rel="noopener noreferrer">
            <CustomButton component="a" primary>View Demo</CustomButton>
          </a>
          <a target="_blank" href={project.codeUrl} rel="noopener noreferrer">
            <CustomButton>View Code</CustomButton>
          </a>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default ProjectDetail;