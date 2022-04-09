import React from "react";

import {
  HeroContaienr,
  HeroWrapper,
  Row,
  Col1,
  Col2,
  H1,
  H11,
  SPAN,
  P,
  Button,
} from "./Hero.elements";


function Hero() {
  return (
    <>
      <HeroContaienr>
        <HeroWrapper>
          <Row>
            <Col1>
              <H1>
                <SPAN>hi,</SPAN> I'm
              </H1>
              <H11>
                Gehan <SPAN> Pasindhu</SPAN>
              </H11>
              <P>
                FreeLancer Web Developer | Software Engineer | Digital Marketer
                | Business Developer | Marketer
              </P>
              <Button>
                <a
                  style={{
                    marginLeft: "-1rem",
                    textDecoration: "none",
                    color: "#fff",
                    background: "transparent",
                  }}
                  target="_blank"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=94705756660"
                >
                  lets chat on Whatsapp
                </a>
              </Button>
            </Col1>
            <Col2>
           
            </Col2>
          </Row>
        </HeroWrapper>
      </HeroContaienr>
    </>
  );
}

export default Hero;
