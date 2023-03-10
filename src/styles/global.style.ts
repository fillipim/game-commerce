import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Nunito Sans', sans-serif;
}
html {
  scroll-behavior: smooth;
}
button{
  cursor: pointer;
  background-color: transparent;
}
body{
    background-color: #000;
}
a{
    text-decoration: none;
    list-style: none;
}
`;
