import styledComponents from "styled-components";

export const HeroContaienr= styledComponents.div`
margin-left: 40px;
margin-right: 40px;

@media screen and (max-width: 768px) {
    padding: 10px 0;
}

@media screen and (max-width: 576px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px 0;
}
`;

export const HeroWrapper = styledComponents.div`
display: gird;
z-index: 1;
width: 100%
margin-right: auto;
margin-left: auto;
margin-top:2rem;
padding: 0 15px;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 0 2px;
}
`;

export const Row = styledComponents.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: "col1 col2";

@media screen and (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
}
`;

export const Col1 = styledComponents.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
width: 100%;
`;

export const Col2 = styledComponents.div`
margin-bottom: 15px;
padding: 0 2px;
grid-area: col2;
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
margin-top: 1rem;
margin-bottom: 1rem;
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
background-size: 20px;
background-repeat: no-repeat;
color: #fff;
font-size: 15px;
text-decoration: none !important;
`;


export const Image = styledComponents.img`

`;