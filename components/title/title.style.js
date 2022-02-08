import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../utils/breakpoint";

export const TitleWrapper = styled(motion.div)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 0;
  margin: 50px 30px;
  position: sticky;

  @media only screen and ${device.sm} {
    margin: 70px 0 0 50px;
  }

  @media only screen and ${device.md} {
    margin: 90px 0 0 100px;
  }
  @media only screen and ${device.lg} {
    margin: 60px 0 0 200px;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const Subtitle = styled(motion.h2)`
  color: ${({ theme }) => theme.gray00 };
  font-weight: 600;
  margin: 0;
  font-size: 30px;
  @media only screen and ${device.sm} {
    font-size: 35px;
  }

  @media only screen and ${device.md} {
    font-size: 38px;
  }
  @media only screen and ${device.lg} {
   font-size: 40px;
  }
`;

export const TitleText = styled(motion.h1)`
  color: ${({ theme }) => theme.secondary };
  text-transform: uppercase;
  font-weight: 700;
  font-size: 53px;

  @media only screen and ${device.sm} {
    font-size: 65px;
  }

  @media only screen and ${device.md} {
    font-size: 70px;
  }
  @media only screen and ${device.lg} {
    font-size: 80px;
  }
`; 