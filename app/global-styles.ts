import { createGlobalStyle } from 'styles/styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Ubuntu', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    /* background-color: #ecf5fb; */
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  ::selection {
    background: #91d5ff;
  }
`;

export default GlobalStyle;
