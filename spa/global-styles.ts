import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;   
    background-color: rgba(242, 245, 248, 1);
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  #app {
    background-color: rgba(242, 245, 248, 1);
    min-height: 100%;
    min-width: 100%;
  }

  body ::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }
`;

export default GlobalStyle;
