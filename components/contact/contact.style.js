import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.main};
  display: flex;
  gap: 20px;
  padding-bottom: 5vh;
  flex-direction: column-reverse;
  align-items: center;
  /* padding-top: 20px; */
  /* justify-content: center; */
  @media only screen and ${device.sm} {
    padding-bottom: 7vh;
  }
  @media only screen and ${device.md} {
    padding-bottom: 7vh;
    flex-direction: row;
  }
  @media only screen and ${device.lg} {
    padding-bottom: 10vh;
  }
`;

export const ContactWrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  /* align-items: center; */
  
@media only screen and ${device.sm} {
  justify-content: end;
  width: 70%;
  height: 70%;
}
@media only screen and ${device.md} {
  padding-right: 150px;
  width: 50%;
  gap: 20px;
  height: 100%;
}
@media only screen and ${device.lg} {
  width: 50%;
  justify-content: end;
  gap: 30px;
}
`;

export const ContactTitle = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: ${({ theme }) => theme.white10};
  margin-bottom: 20px;
`;

export const InputWrapper = styled.label`
  position: relative;
`;

export const InputLabel = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  margin:  14px 20px;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  color:  ${({theme}) => theme.main};
  transition: transform 120ms ease-in;
  line-height: 1.2rem;

  @media only screen and ${device.md}{
    margin:  8px 20px;
  }
  @media only screen and ${device.lg}{
    margin:  14px 20px;
    line-height: 1.2rem;
  }

`;

export const InputField = styled.input`
  box-sizing: border-box;
  display: block;
  /* width: ${({width}) => width ? width : "70%"}; */
  width: 100%;
  border: none;
  padding: 15px 20px 0;
  line-height: 2rem;
  color:  ${({theme}) => theme.white};
  background:  ${({theme}) => theme.gray10};
  border-radius: 5px;

  @media only screen and ${device.md}{
    padding: 13px 18px 0;
    line-height: 1.8em;
  }
  @media only screen and ${device.lg}{
    padding: 15px 20px 0;
    line-height: 2rem;
  }

  &:focus,
  &:not(:placeholder-shown) {
    & {
      outline: none;
      background: ${({theme}) => theme.gray30};
    }
    & + ${InputLabel} {
      transform: translate(0, -25%) scale(.6);
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: ${({ jus }) => jus && jus};
  
  @media only screen and ${device.md} {
    justify-content: start;
  }
`;

export const MsgInput = styled.textarea`
  width: 100%;
  color:  ${({theme}) => theme.white};
  background:  ${({theme}) => theme.gray10};
  border-radius: 5px;
  padding: 15px 20px 0;
  margin-bottom: 20px;
  
  &:focus,
  &:not(:placeholder-shown) {
    & {
      outline: none;
      background: ${({theme}) => theme.gray30};
    }
  }
  `;

export const Back = styled.div`
  color: ${({ theme }) => theme.gray10};
  margin-top: 50px;  
  align-self: end;
  cursor: pointer;
  display: none;
  
  &:hover {
    color: ${({ theme }) => theme.gray00};
  }
  @media only screen and ${device.md} {
    display: block;
    margin-top: 50px;
    font-size: 13px;
  }
  @media only screen and ${device.lg} {
    margin-top: 100px;
    font-size: 15px;
  }
`;

export const Back2 = styled.div`
  color: ${({ theme }) => theme.gray10};
  margin-top: 50px;  
  align-self: end;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    color: ${({ theme }) => theme.gray00};
  }
  @media only screen and ${device.md} {
    display: none;
  }
`;

export const ThankWrapper = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* align-self: center; */
  align-items: center;

  @media only screen and ${device.sm}{
    width: 70%;
    height: 50%;
  }
  @media only screen and ${device.md}{
    width: 50%;
    padding-left: 150px;
    height: 100%;
    align-items: start;
  }
  @media only screen and ${device.lg}{
    padding-left: 200px;
  }
`;

export const ThankText = styled.h1`
  font-family: 'Comfortaa', cursive;
  font-weight: 500;
  color: ${({ theme }) => theme.body};
  font-size: 25px;
  margin-bottom: 30px;

  @media only screen and ${device.sm}{
    font-size: 40px;
    margin-bottom: 50px;
  }
  @media only screen and ${device.md}{
    font-size: 40px;
    margin-bottom: 100px;
  }
  @media only screen and ${device.lg}{
    font-size: 45px;
  }
`;

export const IconWrapper = styled.div`
  width: 7%;
  height: 7%;

  @media only screen and ${device.sm}{
    width: 10%;
    height: 10%;
  }
  @media only screen and ${device.md}{
    width: 15%;
    height: 15%;
  }
`;

export const EmailText = styled.p`
  color: ${({ theme }) => theme.gray10};
  margin-top: 20px;

  @media only screen and ${device.sm}{
    margin-top: 50px;
  }
  @media only screen and ${device.md}{
    margin-top: 70px;
  }
`;

export const CopyRight = styled.p`
  color: ${({ theme }) => theme.gray20};
  margin-top: 50px;
  align-self: end;
  font-size:12px;
  @media only screen and ${device.sm}{
    margin-top: 70px;
  }
  @media only screen and ${device.md}{
    margin-top: 100px;
  }
`;