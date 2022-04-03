import styledComponents from "styled-components";

export const HeroWrapper = styledComponents.div`
display: gird;
z-index: 1;
width: 100vw;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
margin-top:6rem;
justify-content: center;
`;

export const Row = styledComponents.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: "col1 col2";


@media screen and (max-width: 768px) {
    grid-template-areas: "col2 col1";
}
`;

export const Col1 = styledComponents.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const H1 = styledComponents.h1`
color: #f1f1f1;
font-size: 1.5rem;
line-height: 1.2;
font-weight: 500;
letter-spacing: 1.4px;
`;

export const H11 = styledComponents.h1`
text-transform: uppercase;
color: #f1f1f1;
font-size: 4rem;
line-height: 1.2;
font-weight: 800;
letter-spacing: 1px;
font-family: 'Fira Code', monospace;
`;

export const SPAN = styledComponents.span`
color : gold;
`;

export const P = styledComponents.p`
color:#f1f1f1;
font-family:monospace;
font-size: 1.4rem;
`;

export const Button = styledComponents.button`
margin-top: 1rem;
text-transform: uppercase;
padding: 20px 35px 20px 76px;
border: 1px solid transparent;
border-radius: 500px;
background-color: #1ab152;
background-image: url(https://assets.website-files.com/56579ffcc34a791f576971ce/5bf92fcb0627e7ec09fb2e9a_icon-whats.svg);
background-position: 32px 50%;
background-size: 28px;
background-repeat: no-repeat;
color: #fff;
font-size: 18px;
`;

export const Col2 = styledComponents.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;
