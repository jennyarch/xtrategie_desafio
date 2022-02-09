import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
body {
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background:	#B0C4DE;
}
`;