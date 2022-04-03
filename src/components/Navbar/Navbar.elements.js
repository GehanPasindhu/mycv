import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { Contaienr } from "../../globalStyle";

export const Nav = styledComponents.nav`
background: #000;
height:150px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
position:sticky;
top:0;
z-index:10;
`;

export const NavbarContainer = styledComponents(Contaienr)`
display:flex;
justify-content:space-between;
height:80px; 

${Contaienr}
`;

export const NavIcon = styledComponents(Link)`
color:#fff;
justify-content:flex-start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
`;

export const Icon = styledComponents.img`
margin-right:0.5rem;
height:150px;
`;
