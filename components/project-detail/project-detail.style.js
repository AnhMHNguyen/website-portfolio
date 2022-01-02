import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoint';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  
  @media only screen and ${device.sm} {
    flex-direction: ${({ id }) => (parseInt(id) % 2 === 0) ? 'row' : 'row-reverse'};
  }
  @media only screen and ${device.lg} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ id }) => (parseInt(id) % 2 === 0) ? 'row' : 'row-reverse'};
  }
`;

export const ContentWrapper = styled(motion.div)`
  width: 90%
  height: fit-content;
  /* text-align: right; */
  
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  background-color: hsla(0, 0%, 0%, 0.5);
  padding: 15px;
  border-radius: 20px;
  margin-top: -40px;
  z-index: 1;
  text-align: center;
  
  
  @media only screen and ${device.sm} {
    padding: 25px;
    gap: 35px;
    text-align: ${({id}) => (parseInt(id) % 2 === 0) ? 'right' : 'left'};
    position: absolute;
    width: 80%;
    right: ${({id}) => (parseInt(id) % 2 === 0) && "5%"};
    left: ${({id}) => (parseInt(id) % 2 !== 0) && "5%"};
    margin-top: 670px;
  }
  @media only screen and ${device.lg} {
    right: 0;
    left: 0;
    margin-top: 0;
    background: none;
    position: relative;
    width: 50%;
    height: 50%;
    text-align: ${({id}) => (parseInt(id) % 2 === 0) ? 'right' : 'left'};
  }
`;

export const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-size: 20px;
  align-self: center;

  @media only screen and ${device.sm}{
    align-self: inherit;
  }
  @media only screen and ${device.lg}{
    font-size: 25px;
  }
`;

export const Description = styled(motion.p)`
  color: ${({ theme }) => theme.white10};
  font-weight: 500;
  font-size: 15px;
  
  @media only screen and ${device.sm}{
    font-size: 20px;
  }
`;

export const ToolsWrapper = styled(motion.div)`
  display: flex;
  background-color: hsla(0, 0%, 100%, 0.6);
  width: fit-content;
  /* align-self: end; */
  gap: 10px;
  padding: 15px;
  border-radius: 16px;
  align-self: center;
  
  @media only screen and ${device.sm}{
    align-self: ${({id}) => (parseInt(id) % 2 === 0) ? 'end' : 'start'};
    padding: 20px;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.8);
  }
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  gap: 15px;
  /* align-self: end; */
  align-self: center;
  
  @media only screen and ${device.sm}{
    align-self: ${({id}) => (parseInt(id) % 2 === 0) ? 'end' : 'start'};
  }
`;

export const Img = styled(motion.div)`
  width: 100%;
  height:100%;
  background-size: cover;
  border-radius: 20px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform;
  transform: scale(1.1);
  transition: transform 2s cubic-bezier(0.77, 0, 0.175, 1);
  transform-origin: center left;
`;

export const ImageWrapper = styled(motion.div)`
  width: 90%;
  display: flex;
  /* margin: 0 100px; */
  height: 200px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  will-change: transform;
  clip-path: inset(0% 100% 0% 0%);
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

  @media only screen and ${device.sm} {
    width: 80%;
    height: 350px;
  }
  @media only screen and ${device.lg} {
    width: 50%;
    height: 450px;
  }


  &.reveal {
    clip-path: inset(0% 0% 0% 0%);
    ${Img} {
      transform: scale(1);
    }
  }
  
  &:hover {
    ${Img} {
      transform : scale(1.1);
    }
  }
`;

