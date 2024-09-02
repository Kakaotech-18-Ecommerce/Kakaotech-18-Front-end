import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,body{
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background: #ffffff;
    @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 12px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
  }


  #root{
      width : 100%;
      height : auto;
      margin : 0px;
      padding : 0px;
    }
`;

export default GlobalStyle;
