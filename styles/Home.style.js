import styled from 'styled-components';
import { motion } from "framer-motion";
import { device } from '../utils/breakpoint';

export const Container = styled.div`
  
`;  

export const Main = styled(motion.main)`
  /* background: rgb(192,142,164);
  background: linear-gradient(355deg, rgba(192,142,164,1) 0%, rgba(86,91,115,1) 45%, rgba(36,58,84,1) 100%); */
  /* background: rgb(237,161,171); */
  background: linear-gradient(355deg, rgba(237,161,171,1) 0%, rgba(86,91,115,1) 45%, rgba(36,58,84,1) 100%);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const SidebarIcon = styled.div`
  width: 20px;
  height: 20px;
  align-self: center;
  /* position: relative; */
  mask: url(/static/three-dots-vertical.svg) no-repeat;
  mask-size: contain;
  background: ${({ theme }) => theme.white};

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
  color: ${({ theme }) => theme.white};
  font-size: 13px;
  /* position: relative; */

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
  cursor: pointer;
  z-index: 2;
  width: 100%;
  height: auto;
  top: 0;
  left:0;
  margin-left: 15px;
  margin-top: 15px;

  @media only screen and ${device.sm} {
    margin-left: 25px;
    margin-top: 25px;
  }
  @media only screen and ${device.md} {
    margin-left: 30px;
    margin-top: 30px;
  }
  &:hover ${SidebarIcon} {
    background-color: ${({ theme }) => theme.pink};
  }
  &:hover ${SidebarText} {
    color: ${({theme}) => theme.pink};
  }
`;


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;

`;