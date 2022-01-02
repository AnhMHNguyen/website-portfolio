import { useEffect } from 'react';
import { TitleWrapper, SubtitleWrapper, Subtitle, TitleText, Line } from "./title.style";
import { motion } from "framer-motion";
import { fadeInDownVariants, staggerVariants, pathVariants } from "../../utils/animate";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Title = ({ subtitle, title }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  });
  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [inView, animation]);

  return (
    <TitleWrapper data-scroll data-scroll-speed={-1} ref={contentRef}
      animate={ animation } variants={staggerVariants} initial="initial" >
      <SubtitleWrapper>
        <Line>
          <svg width="45" height="15" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 0 10 L 45 10" stroke="#A6A9B6" strokeWidth="15%"
              variants={pathVariants}
            />
          </svg>
        </Line>
        <Subtitle variants={fadeInDownVariants}>{ subtitle }</Subtitle>
      </SubtitleWrapper>
      <TitleText variants={fadeInDownVariants}>{ title }</TitleText>
    </TitleWrapper>
  );
}

export default Title;