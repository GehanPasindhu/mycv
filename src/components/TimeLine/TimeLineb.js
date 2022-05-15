import {
  Container,
  createStyles,
  MantineProvider,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import React from "react";
import { LineDashed } from "tabler-icons-react";
import { Player } from "@lottiefiles/react-lottie-player";
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: "3rem",
    transformOrigin: "0 0",
    transform: "rotate(-90deg)",
    position: "relative",
    top: "20rem",
    zIndex: "1",
    left: "-5rem",
    fontWeight: "800",
    background: "transparent",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: "3rem",
      transformOrigin: "0 0",
      transform: "rotate(-90deg)",
      position: "relative",
      top: "20rem",
      zIndex: "1",
      left: "-5rem",
      fontWeight: "800",
      background: "transparent",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "3rem",
      textAlign: "center",
      color: "#fff",
      transform: "none",
      top: "0",
      left: "auto",
      right: "auto",
    },
  },

  lo: {
    height: "750px",
    width: "750px",
    zIndex: "1",
    position: "absolute",
    right: "0",
    marginTop: "-45rem !important",
    background: "transparent",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      height: "580px",
      width: "530px",
      zIndex: "1",
      position: "absolute",
      right: "0",
      marginTop: "-45rem !important",
      background: "transparent",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none !important",
    },
  },
}));

function TimeLineb() {
  const { classes } = useStyles();

  return (
    <MantineProvider
      theme={{
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
      <Container fludid style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Title
          order={2}
          style={{
            color: "gold",
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: "uppercase",
          }}
          className={classes.title}
        >
          LifeLine
        </Title>

        <Timeline active={1} reverseActive>
          <Timeline.Item
            title="Arpico Insurance"
            lineVariant="dashed"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Joined as a Insurance Agent (2017 - 2019)
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> NAFLIA Award winner year 2018
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Archieved best Consultant Award
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Nominated for the Top 3 Insurance
                Agents in 2018
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item title="Izocele (Pvt) Ltd" style={{ color: "#f1f1f1" }}>
            <Text color="dimmed" size="md">
              Software Engineer, Business Analysis, Digital Marketer (2018 -
              today)
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Develop and Maintain Software Projects
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Manageand create Social Media Campaigns
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Manage all client affairs of the
                company
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Royal Lanka Agencies"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Joined as a Business Development Executive E Commerce (2020 -
              2021)
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Develope and Upgrade the E-Commerce
                website [www.finebrandz.lk]
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Handle Online Customers
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Monitored the sales path and provide
                new stratgies for developing the e-commerce sales
              </Text>
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Manage the Social Media campaigns
              </Text>
            </Text>
          </Timeline.Item>

        

          <Timeline.Item title="Baryon SE" style={{ color: "#f1f1f1" }}>
            <Text color="dimmed" size="md">
              Frontend Developer(2022-05-04-today)
              <Text size="sm" mt={4}>
                <LineDashed size={12} /> Develop and Maintain Software Projects (ReactJs)
              </Text>
            </Text>
          </Timeline.Item>
        </Timeline>

        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_dbepcwmj.json"
          className={classes.lo}
        />

        <Timeline color="grape" active={2} align="right" pt="xl" mt="md">
          <Timeline.Item
            title="MSc In Data Science (Reading)"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Cardiff Metropolitan University (2021 - 2023)
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Bachelor of Engineering"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              IIC University Of Technology Cambodia(2020 - 2021)
              <Text size="sm" mt={4}>
                Completed BEng major in Software Engineering academic year of
                2020 - 2021
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Graduate Diploma in Software Engineering"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Java Institue For Advanced Technology
              <Text size="sm" mt={4}>
                Credit rated by SQA (Scottish Qualification Authority) at Level
                9 on the Scottish Credit and Qualifications Framework (SCQF)
                with 185 credit point
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Higher Diploma in Software Engineering"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Java Institue For Advanced Technology
              <Text size="sm" mt={4}>
                Credit rated by SQA (Scottish Qualification Authority) at Level
                8 on the Scottish Credit and Qualifications Framework (SCQF)
                with 181 credit points
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Diploma in Software Engineering"
            style={{ color: "#f1f1f1" }}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="md">
              Java Institute
              <Text size="md" mt={4}>
                Credit rated by SQA (Scottish Qualification Authority) at Level
                7 on the Scottish Credit and Qualifications Framework (SCQF)
                with 171 credit points
              </Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Diploma in English Literature"
            style={{ color: "#f1f1f1" }}
          >
            <Text color="dimmed" size="md">
              Aquinas University (2013)
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </MantineProvider>
  );
}

export default TimeLineb;
