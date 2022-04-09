import { Card, Container, Grid, Text } from "@mantine/core";
import React from "react";

function Recomendations() {
  return (
    <div style={{ backgroundColor:"#000000", paddingTop:"3rem", paddingBottom:"5rem" }}>
      <Text style={{ color:"gold", textAlign:"center", fontFamily:"'Audiowide', cursive", fontSize:"3rem"}}>
        Recomendations
      </Text>
      <Container>
        <Grid grow gutter="sm">
          <Grid.Col md={12} lg={4}>
            <Card
              style={{
                borderRadius: "10px",
                margin: "10px",
                border: "1px solid #e6e6e6",
                padding: "20px",
                height: "100%",
                background:"transparent"
              }}
            >
              <Text
                style={{
                  color: "gold",
                  fontSize: "1.5rem",
                  lineHeight: "1.5",
                  fontWeight: "bold",
                }}
              >
                Ranil Balasuriya
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.9rem",
                  fontWeight: "300",
                  fontFamily: "Roboto",
                  paddingBottom: "10px",
                }}
              >
                Head Of Marketing & Operations at ComfortOn
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.85rem",
                  fontWeight: "400",
                  fontFamily: "Monstserrat",
                  lineHeight: "1.2",
                }}
              >
                Gehan came into handle the online platform in my dept. He came
                in as a specialist in Web designing and was able to take our
                online platform to another level with he's knowledge and
                experience. A hardworker and mostly a team player. What I liked
                about him was that he was always ready to help out he's team
                mates when they needed he's support. Looking forward to see him
                grow in he's career and I'm sure he will be one to look out for
                in the future.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col md={12} lg={4}>
            <Card
              style={{
                borderRadius: "10px",
                margin: "10px",
                border: "1px solid #e6e6e6",
                padding: "20px",
                height: "100%",
                background:"transparent"
              }}
            >
              <Text
                style={{
                  color: "gold",
                  fontSize: "1.5rem",
                  lineHeight: "1.5",
                  fontWeight: "bold",
                }}
              >
                Ashan Herath{" "}
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.9rem",
                  fontWeight: "300",
                  fontFamily: "Roboto",
                  paddingBottom: "10px",
                }}
              >
                Manager - Marketing and Perfromance at Tutopiya{" "}
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.85rem",
                  fontWeight: "400",
                  fontFamily: "Monstserrat",
                  lineHeight: "1.2",
                }}
              >
                I met Gehan when he was working as the E-commerce Business
                development executive in our team. He's a very knowledgeable and
                hard-working person. As the digital marketer, we both worked
                together to gain more customers through social media and he is
                also a skilled web designer. A multitasker for sure! Good luck
                in your new path of being the CEO of a startup!
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col md={12} lg={4}>
            <Card
              style={{
                borderRadius: "10px",
                margin: "10px",
                border: "1px solid #e6e6e6",
                padding: "20px",
                height: "100%",
                background:"transparent"
              }}
            >
              <Text
                style={{
                  color: "gold",
                  fontSize: "1.3rem",
                  lineHeight: "1.5",
                  fontWeight: "bold",
                }}
              >
                Asanga Suriyapperuma{" "}
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.85rem",
                  fontWeight: "300",
                  fontFamily: "Roboto",
                  paddingBottom: "10px",
                }}
              >
                Shipping professional, Business Development strategist
              </Text>

              <Text
                style={{
                  textAlign: "justify",
                  color: "#8c8c8c",
                  fontSize: "0.85rem",
                  fontWeight: "400",
                  fontFamily: "Monstserrat",
                  lineHeight: "1.2",
                }}
              >
                I have worked with Gehan and he’s truly a remarkable guy who
                knows in and out in e commerce buyer behavior and have an in
                depth knowledge in tech. Gehan is an asset to any organization.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Recomendations;
