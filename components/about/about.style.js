import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoint';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;

  @media only screen and ${device.sm}{
     margin-bottom: 200px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  align-self: center;

  p:nth-child(2) {
    margin-bottom: 20px;

    @media only screen and ${device.sm}{
      margin-bottom: 50px;
    }
  }

  @media only screen and ${device.sm}{
     width: 80%;
  }
  @media only screen and ${device.lg}{
     width: 60%;
  }
`;


export const ImageWrapper = styled.img`
  width:70%;
  position: absolute;
  right: 0;
  will-change: transform;
  border-radius: 5px;
  clip-path: inset(100% 0% 0% 0%);
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

  @media only screen and ${device.sm}{
     width: 60%;
  }
  @media only screen and ${device.md}{
     width:50%;
  }

  &.reveal {
    clip-path: inset(0% 0% 0% 0%);
  }
  
`;


export const TextWrapper = styled(motion.div)`
  position: absolute;
  width:80%;
  top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  color: ${({ theme }) => theme.white10};
  


  @media only screen and ${device.sm}{
    font-size: 20px;
    width:60%;
    top: 350px;
  }

  @media only screen and ${device.md}{
    top: 200px;
    font-size: 23px;
    width:48%;
  }
  @media only screen and ${device.lg}{
    font-size: 25px;
    top: 150px;
  }
`;