import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: hsl(22.1, 40%, 90%);
`;
