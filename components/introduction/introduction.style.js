import styled from 'styled-components';
import { device } from '../../utils/breakpoint';
import { motion } from 'framer-motion';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  position: relative;
  /* margin-bottom: 200px; */
`;

export const Circle = styled.div`
  width: 87%;
  aspect-ratio:1;
  position: absolute;
  clip-path: circle(50%);
  background: rgb(32,64,89);
  background: radial-gradient(circle, rgba(32,64,89,1) 0%, rgba(86,91,115,1) 54%, rgba(191,142,164,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  right: -118%;
  width: 200%;
  top: -160px;
  /* z-index:1; */

  @media only screen and ${device.sm} {
    right: -60vw;
    width: 125%;
    top: -100px;
  }
  @media only screen and ${device.md} {
    top: -140px;
    width: 85%;
    right: -40vw;
  }
  @media only screen and ${device.lg} {
    top: -200px;
    width: 80%;
    right: -35vw;
  }
`;

export const CircleInner = styled.div`
  width: 87%;
  /* top: -100px; */
  aspect-ratio:1;
  clip-path: circle(50%);
  background-color: black;
  z-index: 3;
  background: rgb(32,64,89);
  background: radial-gradient(circle, rgba(32,64,89,1) 0%, rgba(86,91,115,1) 54%, rgba(191,142,164,1) 100%);
  padding-left: 25px;
`;

export const DetailsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* flex-direction: column; */
  @media only screen and ${device.md} {
    display: flex;
    flex-direction: row;
  }

`;

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  margin-top: 35vh;

  @media only screen and ${device.sm} {
    margin-top: 30vh;
  }

  @media only screen and ${device.md} {
    width: 60%;
    align-items: center;
    margin-top: 0;
    position: relative;
  }
  @media only screen and ${device.lg} {
    width: 60%;
    align-items: center;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: inline-block;
  object-fit: contain;
  object-position: center;
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 50px;
  z-index: 2;
  padding-left: 30vw;

  @media only screen and ${device.sm} {
    padding-left: 55vw;
  }
  @media only screen and ${device.md} {
    margin-top: 5%;
    padding-left: 50px;
    width: 40%;
  }
  @media only screen and ${device.lg} {
    margin-top: 10%;
    padding-left: 80px;
  }
  @media only screen and ${device.xl} {
    margin-top: 13%;
    padding-left: 80px;
  }
`;

export const MenuWrapper = styled(motion.div)`
  height: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  gap: 5px;
  padding-top: 100px;
  padding-left: 30px;

  /* @media only screen and ${device.xs} {
    padding-top: 150px;
    height: 60%;
    padding-left: 100px;
  } */
  @media only screen and ${device.sm} {
    padding-top: 100px;
    height: 50%;
    padding-left: 30px;
  }
  @media only screen and ${device.md} {
    height: 30%;
    /* padding-top: 0; */
    padding-left: 30px;
  }
  @media only screen and ${device.lg} {
    height: 20%;
    padding-top: 0;
    padding-left: 0px;
  }
`;

export const MenuText = styled(motion.p)`
  font-size: 10px;
  color: ${({ theme }) => theme.gray10};
  /* line-height:0; */
  cursor: pointer;

  @media only screen and ${device.sm} {
    font-size: 10px;
  }

  @media only screen and ${device.md} {
    font-size: 13px;
  }

  @media only screen and ${device.lg} {
    font-size: 18px;
  }
  &:nth-child(1){
    padding-left: 20px;
    @media only screen and ${device.sm} {
      padding-left: 30px;
    }
    @media only screen and ${device.md} {
      padding-left: 40px;
    }
    @media only screen and ${device.lg} {
      padding-left: 50px;
    }
  }
  &:nth-child(2){
    padding-left: 8px;
    @media only screen and ${device.sm} {
      padding-left: 15px;
    }
    @media only screen and ${device.md} {
      padding-left: 20px;
    }
    @media only screen and ${device.lg} {
      padding-left: 25px;
    }
  }
`;

export const MainText = styled(motion.div)`
  font-family: 'Comfortaa', cursive;
  color: ${({ theme }) => theme.gray10};
  font-size: 23px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  p > span {
    color: ${({ theme }) => theme.pink};
  }
  @media only screen and ${device.sm} {
    padding-top: 0px;
    font-size: 30px;
    padding-left: 0;
  }

  @media only screen and ${device.md} {
    /* padding-top: 20px; */
    font-size: 30px;
  }

  @media only screen and ${device.lg} {
    /* padding-top: 20px; */
    /* padding-left: 100px; */
    font-size: 38px;
    padding-left: 0;
  }
  @media only screen and ${device.xl} {
    /* padding-top: 20px; */
    /* padding-left: 100px; */
    font-size: 45px;
    padding-left: 0;
  }
`;
