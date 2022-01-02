import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../utils/breakpoint';

export const Container = styled.div`
  overflow-x: hidden;
`;  

export const Main = styled.main`
  overflow-x: hidden;
`;

export const SidebarIcon = styled.div`
  width: 20px;
  height: 20px;
  align-self: center;
  mask: url(/static/three-dots-vertical.svg) no-repeat;
  mask-size: contain;
  background: ${({ theme }) => theme.white10};
  /* transition: all 0.2s ease-in-out; */
  @media only screen and ${device.md} {
    width: 25px;
    height: 25px;
  }

  @media only screen and ${device.lg} {
    width: 28px;
    height: 28px;
  }
`;

export const SidebarText = styled(motion.p)`
  color: ${({ theme }) => theme.white10};
  font-size: 13px;

  @media only screen and ${device.md} {
    font-size: 15px;
  }
  @media only screen and ${device.lg} {
    font-size: 18px;
  }
`;

export const SidebarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  mix-blend-mode: difference;
  /* &:hover {
    transform: rotateZ(-25deg);
  } */
  @media only screen and ${device.sm} {
    margin-left: 25px;
    margin-top: 25px;
  }
  @media only screen and ${device.md} {
    margin-left: 30px;
    margin-top: 30px;
  }
  &:hover ${SidebarIcon} {
    background-color: ${({ theme }) => theme.primary};
    /* width: 40px; */
    /* height: 40px; */
  }
  &:hover ${SidebarText} {
    color: ${({theme}) => theme.primary};
  }
`;


export const PageWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 100px;
  /* position: relative; */
  /* height: 100vh; */
  /* width: 400vw;
  justify-content: center;
  align-items: center; */
`;