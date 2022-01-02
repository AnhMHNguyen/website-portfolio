import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/breakpoint';

export const theme = {
  main: '#1D1E26',
  body: '#D2C1D9',
  primary: '#E0E0E0',
  secondary: '#BFD1D9',
  blue: 'rgba(36,58,84,1)',
  pink: 'rgba(255,198,198,1)',
  white: '#ffff',
  white10: '#F2F2F2',
  gray00: '#D9D9D9',
  gray10: '#BFBFBF',
  gray20: '#A6A6A6',
  gray30: '#A6A9B6',
}

export const GlobalStyles = createGlobalStyle`
  * {
   box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* background: ${({ theme }) => theme.main}; */
    /* color:  ${({ theme }) => theme.main}; */
    /* background: rgb(255,198,198);
    background: radial-gradient(circle, rgba(255,198,198,1) 0%, rgba(165,189,196,1) 48%, rgba(105,119,131,1) 100%);
     */
    /* background: rgb(206,244,255); */
    /* background: radial-gradient(circle, rgba(206,244,255,1) 0%, rgba(255,198,198,1) 51%, rgba(204,193,203,1) 100%); */
    /* background: rgb(242,196,216); */
    /* background: radial-gradient(circle, rgba(242,196,216,1) 0%, rgba(21,41,66,1) 100%); */
    background: rgb(213,213,213);
    background: radial-gradient(circle, rgba(213,213,213,1) 0%, rgba(247,156,156,1) 29%, rgba(36,58,84,1) 100%);
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-style: normal;
    scroll-behavior: smooth;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    overflow-x: hidden;
    @media only screen and ${device.md} {
      cursor: none;
    }    
  }
  h1, h2, h3, h4, h5, p, ul, li {
    margin: 0;
  }
  input, textarea, button {
    font-family: inherit
  }
  a {
    text-decoration: none;
  }
  html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }

  .c-scrollbar:hover {
    transform: scaleX(1.45);
  }

  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`;