import {
  Container,
  createStyles,
  Grid,
  List,
  MantineProvider,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import styledComponents from "styled-components";

const Button2 = styledComponents.button`
margin-top: 0.5rem;
margin-bottom: 2rem;
text-transform: uppercase;
padding: 20px 35px 20px 35px;
border: 1px solid orange;
border-radius: 500px;
background-position: 32px 50%;
background-size: 20px;
background-repeat: no-repeat;
color: orange;
font-size: 15px;
text-decoration: none !important;
`;

const useStyles = createStyles((theme) => ({
  title: {
    color: "orange",
    fontSize: "2.2rem",
    lineHeight: "1.2",
    fontWeight: "500",
    letterSpacing: "1.4px",
    fontFamily: "'Fira Code', monospace",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "orange",
      fontSize: "2rem",
      lineHeight: "1.2",
      fontWeight: "500",
      letterSpacing: "1.4px",
      fontFamily: "'Fira Code', monospace",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "1.5rem",
      marginTop: "1rem",
      padding: "0.5rem",
    },
  },
  title2: {
    color: "gold",
    fontSize: "1rem",
    lineHeight: "1.2",
    fontWeight: "500",
    letterSpacing: "1.4px",
    fontFamily: "'Fira Code', monospace",
    marginLeft: "2rem",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "gold",
      fontSize: "0.8rem",
      lineHeight: "1.2",
      fontWeight: "500",
      letterSpacing: "1.4px",
      fontFamily: "'Fira Code', monospace",
      marginLeft: "2rem",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "0.9rem",
    },
  },
  p: {
    color: "#f1f1f1",
    fontFamily: "monospace",
    fontSize: "1.3rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "justify",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "#f1f1f1",
      fontFamily: "monospace",
      fontSize: "1rem",
      marginTop: "1rem",
      marginBottom: "1rem",
      textAlign: "justify",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "0.9rem",
      textAlign: "justify",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      padding: "0.5rem",
    },
  },
  p2: {
    color: "gray",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    marginBottom: "1rem",
    textAlign: "justify",
    marginLeft: "2rem",
    listStyleType: "none",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "gray",
      fontFamily: "monospace",
      fontSize: "0.8rem",
      marginBottom: "1rem",
      textAlign: "justify",
      marginLeft: "2rem",
      listStyleType: "none",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "0.8rem",
      textAlign: "justify",
      marginTop: "0.5rem",
      marginBottom: "1.2rem",
    },
  },
  hline: {
    color: "gold",
    border: "0.5px solid lightgreen",
    width: "55%",
    marginTop: "0.4rem",
    marginRight: "0.3rem",
    marginBottom: "0.5rem",
    marginLeft: "2rem",

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "gold",
      border: "0.5px solid lightgreen",
      width: "50%",
      marginTop: "0.4rem",
      marginRight: "0.3rem",
      marginBottom: "0.5rem",
      marginLeft: "2rem",
    },
  },

  pzq: {
    "&:hover": {
      transition: "0.2s ease-in-out !important",
      fontSize: "1.25rem",
    },
  },
  sbtn: {
    "&:hover": {
      transition: "0.2s ease-in-out !important",
      fontSize: "1.25rem",
    },
  },
}));

function Footer() {
  const date = new Date();

  const { classes } = useStyles();
  return (
    <>
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
        <Container>
          <Grid gutter="sm">
            <Grid.Col md={12} lg={6}>
              <Title order={1} className={classes.title}>
                Got A project? Lets Talk About It!
              </Title>
              <Text className={classes.p}>
                An inventive and innovative young engineer with an open mind.
                Great analytical, logical, and presentation skills. Further
                capable of achieving targeted work with deadlines under
                pressure. Also good in teamwork, challenging environments and
                cope stress positively as well as being punctual and
                work-oriented. Willing to provide a great service to the
                organization and make a good impact on everyone
              </Text>
              <a
                href="/gehanPasindhu.pdf"
                download
                style={{
                  textDecoration: "none",
                  color: "orange",
                  background: "transparent",
                }}
              >
                <Button2 className={classes.sbtn}>Download My Cv</Button2>
              </a>
            </Grid.Col>
            <Grid.Col md={12} lg={6}>
              <Title order={5} className={classes.title2}>
                Contact Details
              </Title>
              <hr className={classes.hline} />
              <List className={classes.p2}>
                <List.Item
                  component="a"
                  href="mailto:pasindhu@izocele.lk"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  pasindhu@izocele.lk
                </List.Item>
                <br />
                <List.Item
                  component="a"
                  href="tel:+94705756660"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  +94 70 575 6660
                </List.Item>
              </List>
              <Title order={5} className={classes.title2}>
                Business Details
              </Title>
              <hr className={classes.hline} />
              <List className={classes.p2}>
                <List.Item>Izocele (Pvt) Ltd</List.Item>
                <List.Item>PV 00242437</List.Item>
                <List.Item>Location : Sri Lanka</List.Item>
              </List>
              <Title order={5} className={classes.title2}>
                Socials
              </Title>
              <hr className={classes.hline} />
              <List className={classes.p2}>
                <List.Item
                  component="a"
                  href="https://www.linkedin.com/in/gehanpasindhu/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  Linkedin
                </List.Item>
                <br />
                <List.Item
                  component="a"
                  href="https://github.com/GehanPasindhu"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  Github
                </List.Item>
                <br />
                <List.Item
                  component="a"
                  href="https://www.facebook.com/gehanpasindhujay/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  Facebook
                </List.Item>
                <br />
                <List.Item
                  component="a"
                  href="https://www.instagram.com/izocele.lk/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  Instagram
                </List.Item>
                <br />
                <List.Item
                  component="a"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=94705756660"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className={classes.pzq}
                >
                  Whatsapp
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>

          <Grid pt="lg" mt="md">
            <Grid.Col md={12} lg={12}>
              <Text
                color="#f1f1f1"
                style={{ fontSize: "0.75rem" }}
                align="right"
              >
                <span style={{ fontSize: "0.8rem", color: "gray" }}>
                  Version
                </span>
                <br />
                {date.getFullYear()} &copy; Edition
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </MantineProvider>
    </>
  );
}

export default Footer;
