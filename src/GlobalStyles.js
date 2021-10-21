import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
display: flex;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background: ${(props) => props.background};
transition: all 0.5s ease-out;
}
`;

export default GlobalStyles;
