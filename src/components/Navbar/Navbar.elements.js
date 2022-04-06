import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { Contaienr } from "../../globalStyle";

export const Nav = styledComponents.nav`
background: #000;
display:flex;
justify-content:center;
align-items:left;
font-size:1.5rem;
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
padding:0 20px;
`;

export const Icon = styledComponents.img`
margin-right:0.5rem;
height:150px;
`;
