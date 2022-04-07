import React from "react";

import {
  RecomendationsHeader,
  H2,
  RecomdationsWrapper,
  RecomendCard,
  NameRow,
  Dp,
  Name,
  NameText,
  Postion,
  Description,
} from "./Recomendations.elements";

import Ashan from "../images/ashan.jpg";
import Asanga from "../images/asanga.jpg";
import Ranil from "../images/Ranil.jpg";

function Recomendations() {
  return (
    <>
      <RecomendationsHeader>
        <H2>Recomendations</H2>
        <RecomdationsWrapper>
       
          <RecomendCard>
            <NameRow>
              <Dp src={Ranil} />
              <Name>
                <NameText>
                Ranil Balasuriya
                </NameText>
                <Postion>
                Head Of Marketing & Operations at ComfortOn
                </Postion>
              </Name>
            </NameRow>
            <Description>
           Gehan came into handle the online platform in my dept. He came in as a specialist in Web designing and was able to take our online platform to another level with he's knowledge and experience. A hardworker and mostly a team player. What I liked about him was that he was always ready to help out he's team mates when they needed he's support. Looking forward to see him grow in he's career and I'm sure he will be one to look out for in the future.
             </Description>
          </RecomendCard>


          <RecomendCard>
            <NameRow>
             <Dp src={Ashan} />
              <Name>
                <NameText>
                    Ashan Herath
                </NameText>
                <Postion style={{ fontSize:'0.8rem' }}>
                    Manager - Marketing and Perfromance at Tutopiya
                </Postion>
              </Name>
            </NameRow>
            <Description>
            I met Gehan when he was working as the E-commerce Business development executive in our team. He's a very knowledgeable and hard-working person. As the digital marketer, we both worked together to gain more customers through social media and he is also a skilled web designer. A multitasker for sure! Good luck in your new path of being the CEO of a startup!
            </Description>
          </RecomendCard>

          <RecomendCard>
            <NameRow>
              <Dp src={Asanga} />
              <Name>
                <NameText style={{ fontSize:'1.2rem' }}>
                Asanga Suriyapperuma
                </NameText>
                <Postion>
                Shipping professional, Business Development strategist
                </Postion>
              </Name>
            </NameRow>
            <Description>
            I have worked with Gehan and he’s truly a remarkable guy who knows in and out in e commerce buyer behavior and have an in depth knowledge in tech. Gehan is an asset to any organization. 
            </Description>
          </RecomendCard>


        </RecomdationsWrapper>
      </RecomendationsHeader>
    </>
  );
}

export default Recomendations;
