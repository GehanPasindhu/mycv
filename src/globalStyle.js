import style, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: #000000;
}
`;

export const Contaienr = style.div`
    z-index: 1;
    width :100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;

@media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
}
`;

export default GlobalStyle;
