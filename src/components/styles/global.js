import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/index';
export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    background:#7159c1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html,body, #app{
    height:100%;
  }

 `;
