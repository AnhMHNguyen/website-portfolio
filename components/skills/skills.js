import React, { useEffect } from 'react';
import Title from '../title/title';
import { Container, GridWrapper, IconWrapper, Icon, IconText } from './skills.style';
import icons from '../../data/skill.json';
import { useInView } from 'react-intersection-observer';
import { domAnimation, useAnimation } from 'framer-motion';

const item = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

const Skills = React.forwardRef((props, ref) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px'
  });
  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [inView, animation]);

  return (
    <Container data-scroll-section ref={ref} id="skills">
      <Title subtitle="What I can do" title="Skills" />
      <GridWrapper
        data-scroll data-scroll-speed={1}
        ref={contentRef}
        animate={ animation }
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {icons.map((icon) => (
          <IconWrapper key={icon.id} variants={item}>
            <Icon url={icon.url} />
            <IconText>{ icon.name}</IconText>
          </IconWrapper>
        ))}
      </GridWrapper>
    </Container>
  );
})


export default Skills;