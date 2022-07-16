import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Color Scheme Nomenclature 
ex: {--color-intensity}
intensity = {
  light= 100
  dark=900
}
*/
:root{
  --white: #f9f9f9;
  --transparent-white-200:#f9f9f9cc;
  --transparent-white:#f9f9f91a;
  --blue-100:#0063e5;
  --blue-300:#0483ee;
  --blue-600:#040615;
  --blue-800:#090b13;
  --grey:#c6c6c6;
  --gray-400: #9696ab;
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
background:var(--blue-600) ;
}
`;
