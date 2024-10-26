import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`


   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body{
      overflow-x: hidden;
   }

   #root{
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #121b3b;
   }
`
export default GlobalStyled