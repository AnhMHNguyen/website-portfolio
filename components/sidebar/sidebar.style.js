import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoint';

export const SidebarWrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  width: 80%;
  max-width: 400px;
  left:0;
  top:0;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
  z-index: 90;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  @media only screen and ${device.md} {
    padding-top: 7vh;
  }
  @media only screen and ${device.lg} {
    padding-top: 10vh;
  }
  @media only screen and ${device.xl} {
    padding-top: 15vh;
  }
`;

export const NavText = styled.p`
  text-shadow:0px -40px 0px ${({ theme }) => theme.main};
  transition:all 0.75s;
  transform:translateY(100%) translateZ(0);
  transition-delay:all 0.25s;

  @media only screen and ${device.lg} {

  }

  @media only screen and ${device.xl} {
    text-shadow:0px -40px 0px ${({ theme }) => theme.main};
  }
`;

export const NavLink = styled.p`
  font-size:30px;
  text-align:left;
  font-weight:500;
  position:relative;
  text-transform:uppercase;
  height:45px;
  line-height:40px;
  padding-left:40px;
  margin-top:40px;
  overflow:hidden;
  
  color: ${({ theme }) => theme.main};
  cursor:pointer;

  @media only screen and ${device.md} {
    padding-left:60px;
    font-size: 20px;
    height:30px;
    line-height:40px;
  }
  @media only screen and ${device.lg} {
    font-size: 25px;
    height:40px;
    line-height:40px;
  }
  @media only screen and ${device.xl} {
    font-size:30px;
    height:45px;
    line-height:40px;
  }

  &:after {
    content: '';
    position:absolute;
    width:80%;
    border-bottom:2px solid ${({ theme }) => theme.blue};
    bottom:50%;
    left:-100%;
    transition-delay: all 0.5s;
    transition: all 0.5s;
  }
  &:hover:after {
    left:100%;
  }
  &:hover ${NavText} {
    text-shadow:0px -40px 0px rgba(255, 255, 255, 0);
    transform:translateY(0%) translateZ(0) scale(1.1);
    font-weight:700;
  }
`;

export const ContactWrapper = styled.div`
  padding-left: 40px;
  padding-right: 60px;
  position: absolute;
  bottom: 100px;
  @media only screen and ${device.md} {
    padding-left: 60px;
    bottom: 30px;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
`;  



