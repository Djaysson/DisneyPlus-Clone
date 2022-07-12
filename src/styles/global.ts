import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --white: #f9f9f9;
  --light-blue:#040615;
  --dark-blue:#090b13;
  --grey:#c6c6c6;
  --black:#000000;
  --transparent-black:#0000004d;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',Arial, sans-serif;
}
html{ 
  @media(max-width:1080px){
    font-size:93.75%; //15px
  }
  @media(max-width:720px){
    font-size:87.5%; //14px
  }    
}  
body { 
  width: 100%;
color: var(--white);
background:var(--light-blue) ;
}
`;
