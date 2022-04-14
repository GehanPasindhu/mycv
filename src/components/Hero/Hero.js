import {
  Container,
  createStyles,
  Grid,
  MantineProvider,
  Text,
} from "@mantine/core";
import React from "react";
import styledComponents from "styled-components";
import {
  BrandFacebook,
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  Mail,
} from "tabler-icons-react";

const SPAN = styledComponents.span`
color : gold;
`;

const Button = styledComponents.button`
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
margin-left:10px;

@media screen and (max-width: 768px){
  margin-left:-5px;
}
`;

const Button2 = styledComponents.button`
margin-top: 1rem;
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
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "#f1f1f1",
      fontSize: "1.5rem",
      lineHeight: "1.2",
      fontWeight: "500",
      letterSpacing: "1.4px",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "1.5rem",
      marginTop: "1rem",
    },
  },

  title2: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      textTransform: "uppercase",
      color: "#f1f1f1",
      fontSize: "4rem",
      lineHeight: "1",
      fontWeight: "800",
      letterSpacing: "0.1rem",
      fontFamily: "'Fira Code', monospace",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "2.5rem",
    },
  },

  p: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "#f1f1f1",
      fontFamily: "monospace",
      fontSize: "1.5rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "1.2rem",
      textAlign: "left",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },

  icon: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      color: "gold",
      border: "1px solid yellow",
      borderRadius: "50%",
      padding: "0.25rem",
      height: "35px",
      width: "35px",
      marginTop: "0.4rem",
      marginRight: "0.3rem",

      "&:hover": {
        transition: "0.2s ease-in-out !important",
        height: "45px",
        width: "45px",
      },
    },
  },

  sbtn: {
    "&:hover": {
      transition: "0.2s ease-in-out !important",
      fontSize: "1.25rem",
    },
  },
}));

function Hero() {
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
        <Container style={{ marginTop: "1rem" }}>
          <Grid gutter="sm">
            <Grid.Col md={12} lg={12}>
              <Text className={classes.title}>
                <SPAN>hi,</SPAN> I'm
              </Text>
              <Text className={classes.title2}>
                Gehan <SPAN> Pasindhu</SPAN>
              </Text>
              <Text className={classes.p}>
                Freelance Web Developer | Software Engineer | Digital Marketer
                | Business Developer | Marketer
              </Text>

              <Grid>
                <Text component="a" href="https://github.com/GehanPasindhu">
                  <BrandGithub className={classes.icon} />
                </Text>
                <Text component="a" href="mailto:pasindhu@izocele.lk">
                  <Mail className={classes.icon} />
                </Text>
                <Text
                  component="a"
                  href="https://www.linkedin.com/in/gehanpasindhu/"
                >
                  <BrandLinkedin className={classes.icon} />
                </Text>
                <Text
                  component="a"
                  href="https://www.facebook.com/gehanpasindhujay/"
                >
                  <BrandFacebook className={classes.icon} />
                </Text>
                <Text
                  component="a"
                  href="https://www.instagram.com/izocele.lk/"
                >
                  <BrandInstagram className={classes.icon} />
                </Text>
              </Grid>

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

              <Button>
                <a
                  style={{
                    marginLeft: "-1rem",
                    textDecoration: "none",
                    color: "#fff",
                    background: "transparent",
                  }}
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=94705756660"
                >
                  lets chat on Whatsapp
                </a>
              </Button>
            </Grid.Col>
            <Grid.Col md={12} lg={6}></Grid.Col>
          </Grid>
        </Container>
      </MantineProvider>
    </>
  );
}

export default Hero;
