import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../utils/breakpoint';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 200px;

  @media only screen and ${device.md} {
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;

export const GridWrapper = styled(motion.div)`
  margin-top: 20px;
  display: grid;
  width: 93%;
  max-width: 1200px;
  align-self: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 100px));
  justify-content: center;
  align-items: center;
  height: 60%;
  column-gap: 10px;
  row-gap: 10px;

  @media only screen and ${device.sm} {
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
    column-gap: 20px;
    row-gap: 10px;
  }
`;

export const IconWrapper = styled(motion.div)`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: hsla(0, 0%, 100%, 0.6);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 10px;

  &:hover {
    background: hsla(0, 0%, 100%, 0.8);
    border: 1px solid #fff;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: url(${props => props.url}) no-repeat center;
`;

export const IconText = styled.p`
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
  color: ${({ theme }) => theme.main}
`;


