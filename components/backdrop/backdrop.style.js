import styled from "styled-components";
import { motion } from 'framer-motion';

export const BackdropContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width:100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;
`;