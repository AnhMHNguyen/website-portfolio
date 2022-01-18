import styled from "styled-components";
import { motion } from 'framer-motion';
import { device } from "../../utils/breakpoint";

export const Container = styled.section`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media only screen and ${device.sm}{
     margin-bottom: 200px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

export const ProjectsWrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  /* height:100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const GridContainer = styled(motion.div)`
  width: 100%;
  height: 600px;

  @media only screen and ${device.sm} {
    height: 800px;
  }
  @media only screen and ${device.lg} {
    height: 600px;
  }
`;
