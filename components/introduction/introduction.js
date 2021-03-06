import React, { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { pathVariants, staggerVariants } from '../../utils/animate';
import { Link } from "react-scroll";
import { Container, DetailsWrapper, WelcomeWrapper, ContentWrapper, MenuWrapper, Circle, CircleInner, MenuText, MainText, ImageWrapper } from './introduction.style';

const container = {
  initial: {
    opacity: 0,
    y: '100px'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 2,
      delayChildren: 2.8,
      staggerChildren: 0.5
    },
  },
}

const item = {
  initial: {
    opacity: 0,
    y: '100px'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 3,
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}


const Introduction = ({ setVisibleSection }) => {

  const [contentRef, inView] = useInView({
    rootMargin: '-150px'
  });
  useEffect(() => {
    if (inView) {
      setVisibleSection('Introduction');
    }
  }, [inView]);

  return (
    <Container ref={contentRef} id="introduction">
      <Circle
        initial={{
          opacity: 0,
          x: '500px'
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 2,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9]
          }
        }}
      >
        <CircleInner
          initial={{
            opacity: 0,
            y: '-200px',
            x: '500px'
          }}
          animate={{
            x: 0,
            y:0,
            opacity: 1,
            transition: {
              delay: 2.3,
              duration: 1,
              ease: [0.6, 0.05, -0.01, 0.9]
            }
          }}
        />
      </Circle>
      <DetailsWrapper>
         <WelcomeWrapper>
          <ImageWrapper >
            <svg viewBox="0 0 1015 125" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={pathVariants} initial="initial" animate="animate"
                d="M0 117.563C36.4782 124.65 81.7382 132.489 143.886 86.971C206.034 41.4535 197.355 46.0515 230.362 30.428C230.362 30.428 262.615 17.5176 277.931 21.1614C283.573 22.8867 292.302 28.9264 289.414 37.1633C284.508 51.1522 250.583 85.7235 255.348 102.298C258.218 112.284 294.605 75.5585 314.794 53.2301C323.272 43.8529 335.606 25.2298 335 27.9397C329 37.1634 314.794 80.8491 314.794 90.3034C314.794 119.819 398.703 21.4625 386.411 40.4668C358.283 83.9513 424.24 79.5418 420.187 62.861C416.134 46.1802 375.602 71.0123 373.5 90.3036C371.398 109.595 408.437 86.6861 416 83.7613C423.564 80.8365 447.318 69.7543 464.033 55.9563C484.505 39.0561 516.966 10.0601 506.654 3.00011C496.342 -4.05984 411.033 90.0958 425.533 102.298C440.033 114.5 471.52 74.4912 498.825 70.2187C503.825 69.4363 504.325 69.9363 504.825 70.2187C505.325 70.5011 509.325 72.8329 509.325 72.8329C492.325 53.4364 478.825 97.9363 492.325 101.436C505.825 104.936 528.624 96.5947 539.975 79.1765C541.516 76.8128 543.655 70.2187 543.353 70.2187C538.73 70.2187 525.114 94.4419 532.545 95.5323C539.975 96.6227 549.36 88.987 550.784 87.3544C569.929 65.4001 534.737 50.0305 536.533 70.2187C538.154 88.4477 585.544 60.8498 593.478 57.02C608.697 49.6734 598.53 63.7252 593.478 70.5117C587.036 79.1645 573.081 102.025 576.033 99C578.984 95.9748 584.359 88.3306 592.355 79.4212C600.351 70.5118 624.659 46.8167 635.945 54.294C645.174 60.4088 623.014 92.7193 618.591 99C616.951 101.328 644.26 57.02 660.473 59.7459C676.685 62.4719 644.811 98.0081 653.718 99C678.682 101.78 734.505 75.094 722.621 63.047C710.737 51.0001 671.745 92.4742 686.737 100C701.729 107.526 734.065 75.447 775.033 72.8329C816 70.2187 822 81.3573 886.5 78.3573C951 75.3573 973.095 -3.32889 1012.5 21.1614" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </ImageWrapper>
        </WelcomeWrapper>
         <ContentWrapper>
          <MenuWrapper variants={container} initial="initial" animate="animate" >
            <Link to="skills" spy={true} smooth={true} duration={500} className="one">
              <MenuText variants={item} >Skills</MenuText>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className="two">
              <MenuText variants={item}>Projects</MenuText>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <MenuText variants={item} >About</MenuText>
            </Link>
          </MenuWrapper>
          <MainText variants={container} initial="initial" animate="animate">
            <motion.p variants={item} >I&lsquo;m <span>Kate Nguyen</span>,</motion.p>
            <motion.p variants={item} >a website developer</motion.p>
          </MainText>
        </ContentWrapper>
      </DetailsWrapper>
     
      
    </Container>
  );
};

export default Introduction;