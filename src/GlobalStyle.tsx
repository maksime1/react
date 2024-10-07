import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  

  body {
    
    font-family: 'League Spartan', sans-serif;
    box-sizing: border-box;
    background-color: #070724;
    background-image: url("/assets/background-stars.svg");
    background-size:cover;
    @media (min-width: 768px){
      padding: 32px 40px 36px 39px;
    }
}
`;

export default GlobalStyle;
