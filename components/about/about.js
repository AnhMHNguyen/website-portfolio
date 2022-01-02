import React from 'react';
import { useEffect } from "react";
import { Container } from "./about.style";
import Title from '../title/title';
import CustomButton from '../custom-button/custom-button';
import { saveAs } from 'file-saver'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { staggerVariants, fadeInUpVariants } from "../../utils/animate";
import { ContentWrapper, ImageWrapper, TextWrapper } from "./about.style";

const About = React.forwardRef((props, ref) => {
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
  const saveFile = (e) => {
    e.preventDefault();
    saveAs('/static/KateNguyen_Resume.pdf', "KateNguyen_Resume.pdf")
  }

  return (
    <Container data-scroll-section ref={ref} id="about">
      <Title subtitle="Some Info" title="About Me" />
      <ContentWrapper>
        <ImageWrapper src="/static/me.jpg" data-scroll data-scroll-speed={1} alt="me" className={inView && 'reveal'}/>
        <TextWrapper
          ref={contentRef}
          animate={animation}
          initial="initial"
          variants={staggerVariants}
        >
          <motion.p variants={fadeInUpVariants}> Hey! My name is Kate Nguyen. I am a graduate with an Advanced Diploma in Computer Programming and Analysis. My interests are in Web Developer and I love to create beautiful and performant products with delightful user experiences. </motion.p>
          <motion.p variants={fadeInUpVariants}> I am also a data lover and eager to learn new things everyday.</motion.p>
          <CustomButton onClick={saveFile}>My Resume</CustomButton>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
})


export default About;