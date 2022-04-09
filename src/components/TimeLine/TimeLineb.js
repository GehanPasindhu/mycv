import { Container, Text, Timeline } from "@mantine/core";
import React from "react";
import { LineDashed } from "tabler-icons-react";

function TimeLineb() {
  return (
    <Container fludid style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <Text
        style={{
          color: "gold",
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "3rem",
          transformOrigin: "0 0",
          transform: "rotate(-90deg)",
          position: "relative",
          top: "20rem",
          zIndex: "1",
          left: "-5rem",
          fontWeight: "800",
          background: "transparent",
          textTransform: "uppercase",
        }}
      >
        LifeLine
      </Text>

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
              <LineDashed size={12} /> Nominated for the Top 3 Insurance Agents
              in 2018
            </Text>
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Royal Lanka Agencies"
          style={{ color: "#f1f1f1" }}
        >
          <Text color="dimmed" size="md">
            Joined as a Business Development Executive E Commerce (2020 - 2021)
            <Text size="sm" mt={4}>
              <LineDashed size={12} /> Develope and Upgrade the E-Commerce
              website [www.finebrandz.lk]
            </Text>
            <Text size="sm" mt={4}>
              <LineDashed size={12} /> Handle Online Customers
            </Text>
            <Text size="sm" mt={4}>
              <LineDashed size={12} /> Monitored the sales path and provide new
              stratgies for developing the e-commerce sales
            </Text>
            <Text size="sm" mt={4}>
              <LineDashed size={12} /> Manage the Social Media campaigns
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
              <LineDashed size={12} /> Manage all client affairs of the company
            </Text>
          </Text>
        </Timeline.Item>
      </Timeline>

      <Timeline color="grape" active={2} align="right">
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
              Completed BEng major in Software Engineering academic year of 2020
              - 2021
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
              Credit rated by SQA (Scottish Qualification Authority) at Level 9
              on the Scottish Credit and Qualifications Framework (SCQF) with
              185 credit point
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
              Credit rated by SQA (Scottish Qualification Authority) at Level 8
              on the Scottish Credit and Qualifications Framework (SCQF) with
              181 credit points
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
              Credit rated by SQA (Scottish Qualification Authority) at Level 7
              on the Scottish Credit and Qualifications Framework (SCQF) with
              171 credit points
            </Text>
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Diploma in English Literature" style={{ color: "#f1f1f1" }}>
          <Text color="dimmed" size="md">
          Aquinas University (2013)
           
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default TimeLineb;
