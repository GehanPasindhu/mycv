import styledComponents from "styled-components";

export const RecomendationsHeader = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;
margin-left: 15px;
margin-right: 15px;
`;

export const H2 = styledComponents.h2`
color: #f1f1f1;
font-size: 2.5rem;
text-transform: uppercase;
`;

export const RecomdationsWrapper = styledComponents.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;
margin:0 auto;
align-items: center;
padding: 0 50px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const RecomendCard = styledComponents.div`
border-radius: 10px;
border: 1px solid #e6e6e6;
padding: 20px;
margin: 10px;
align-items: center;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;
height: 290px;

&:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
}
`;

export const NameRow = styledComponents.div`
display: flex;
margin-bottom: 10px;
`;

export const Dp = styledComponents.img`
    border-radius: 50%;
    width: 80px;
    padding: 4px;
`;

export const Name = styledComponents.div`
    display: block;
    margin-left: 10px;
    padding: 5px;
`;

export const NameText = styledComponents.h3`
text-align: left;
color: gold;
font-size: 1.5rem;
line-height: 1.5;
`;

export const Postion = styledComponents.h5`
text-align: jsutify;
color: #8c8c8c;
font-size: 0.9rem;
font-weight: 300;
font-family: "Roboto", sans-serif;
padding-bottom: 10px;
`;

export const Description = styledComponents.p`
text-align: justify;
color: #8c8c8c;
font-size: 14px;
font-weight: 400;
font-family: "Monstserrat", sans-serif;
line-height: 1.2;
`;
