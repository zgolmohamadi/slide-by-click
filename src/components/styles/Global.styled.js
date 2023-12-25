import styled, { createGlobalStyle } from "styled-components";
import iransttf from "../../assets/fonts/irsans.ttf";
import iransbttf from "../../assets/fonts/irsans.ttf";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Iranian Sans';
    src:url(${iransttf}) format('truetype');
    }

  @font-face {
    font-family: 'Iranian Sans-bold';
    font-weight:600;
    src:url(${iransbttf}) format('truetype');
    }

  * {
    box-sizing: border-box;
    font-family:'Iranian Sans', sans-serif
  }

  body {
    color: hsl(192, 100%, 9%);
    font-size: 16px;
    margin: 0;
    font-weight:300;
    text-align:right;
    direction:rtl
    padding-top:1rem
  }
  img {
    max-width: 100%;
}`;

export default GlobalStyles;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:1rem 0;
  
`;
