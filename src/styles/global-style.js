import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background: #ffffff;
  }

  #root{
      width : 100%;
      height : 100%;
      margin : 0px;
      padding : 0px;
    }
`;

export default GlobalStyle;
