import styled from "styled-components";
import { device, size } from "../../utils/breakpoint";

export const CursorWrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  @media only screen and (max-width:${size.md}) {
    display: none;
  }
`;

export const CursorSec = styled.div`
  width: 40px;
  height: 40px;
  z-index: 1000;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  position: fixed;
  border: 1px solid ${({theme}) => theme.white};
  mix-blend-mode: difference;
  border-radius: 50%;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cursor = styled.div`
  z-index: 1000;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  background: ${({theme}) => theme.white};
  /* border: 3px solid ${({theme}) => theme.body}; */
  mix-blend-mode: difference;
  transition: width 1s cubic-bezier(0.19, 1, 0.22, 1),
  height 1s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: center;
  pointer-events: none;
  width: 1.3rem;
  height: 1.3rem;
`;