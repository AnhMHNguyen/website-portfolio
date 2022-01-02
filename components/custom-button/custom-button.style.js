import styled, { keyframes } from "styled-components";
import { device } from "../../utils/breakpoint";

const rotate = keyframes`
  0%  {transform: rotate(0deg) translate3d(0, 0, 0);}
  25% {transform: rotate(3deg) translate3d(0, 0, 0);}
  50% {transform: rotate(-3deg) translate3d(0, 0, 0);}
  75% {transform: rotate(1deg) translate3d(0, 0, 0);}
  100% {transform: rotate(0deg) translate3d(0, 0, 0);}
`;

const storm = keyframes`
  0% {transform: translate3d( 0, 0, 0) translateZ(0);}
  25% {transform: translate3d( 4px, 0, 0) translateZ(0);}
  50% {transform: translate3d( -3px, 0, 0) translateZ(0);}
  75% {transform: translate3d( 2px, 0, 0) translateZ(0);}
  100% {transform: translate3d( 0, 0, 0) translateZ(0);}
`;

export const CustomButtonContainer = styled.button`
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 50px;
  width: 150px;
  opacity: 1;
  background-color: ${({primary, theme}) => primary ? theme.body : theme.secondary};
  border: 1px solid ${({ theme }) => theme.primary};
  
  @media only screen and ${device.sm} {
    height: 60px;
    width: 210px;
  }
  span{
    color: ${({theme}) => theme.main};
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.7px;
    @media only screen and ${device.sm} {
      font-size: 15px;
    }
  }
  &:hover {
    animation: ${rotate} 0.7s ease-in-out both;
    span {
      animation: ${storm} 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
`;