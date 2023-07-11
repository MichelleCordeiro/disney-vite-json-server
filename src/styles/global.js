import { createGlobalStyle } from 'styled-components';

import Disney from '../fonts/waltographUI.ttf'
import Disney2 from '../fonts/waltograph42.otf'

export default createGlobalStyle`
  @font-face {
    font-family: "Disney";
    src: local("waltographUI"),
      url(${Disney}) format("truetype"),
      url(${Disney2}) format("opentype");
      font-weight: 500;
      font-size: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smmothing: antialiased;
    font-size: 1.6rem;
  }

  body, input, button, textarea, p {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  }

  h1 {
    font-family: 'Disney', 'Disney2';
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }


  button:hover, a:hover {
    filter: brightness(0.7);
  }

  .hide {
    display: none;
  }

`