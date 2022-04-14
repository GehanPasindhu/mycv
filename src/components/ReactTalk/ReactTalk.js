import React from "react";
import {
  Center,
  Container,
  createStyles,
  Grid,
  MantineProvider,
  MediaQuery,
  SimpleGrid,
  Text,
  Tooltip,
} from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: "3rem",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "2rem",
    },
  },

  title2: {
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: "2.5rem",
    },

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: "1.5rem",
    },
  },

  images: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "360px",
      alignItems: "center",
    },
  },

  imagess: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "385px",
      alignItems: "center",
    },
  },
}));

function ReactTalk() {
  const { classes } = useStyles();
  return (
    <div style={{ padding: "1rem" }}>
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
          <Text
            align="center"
            color="orange"
            style={{
              fontFamily: "'Audiowide', cursive",
            }}
            className={classes.title}
          >
            <BrandGithub size={35} /> Github Stats
          </Text>
          <Grid gutter="xs">
            <Grid.Col md={12} lg={12}>
              <Center>
                <img
                  src="https://github-profile-trophy.vercel.app/?username=gehanpasindhu&no-frame=true&margin-w=5&no-bg=true&theme=alduin"
                  alt="gehanpasindhu"
                  align="center"
                  style={{ padding: "1rem" }}
                  className={classes.imagess}
                />
              </Center>
            </Grid.Col>
            <Grid.Col md={12} lg={6} sm={12}>
              <Center>
                <MediaQuery>
                  <a
                    href="https://awesome-github-stats.azurewebsites.net/index.html??cardType=level&theme=ocean-dark&Border=151A28&Ring=11DD2E&Title=11DD2E"
                    style={{ padding: "0.5rem" }}
                  >
                    <img
                      className={classes.images}
                      alt="gehanPasindhu's GitHub Stats"
                      src="https://awesome-github-stats.azurewebsites.net/user-stats/gehanPasindhu?cardType=level&theme=ocean-dark&Border=151A28&Ring=11DD2E&Title=11DD2E"
                    />
                  </a>
                </MediaQuery>
              </Center>
            </Grid.Col>
            <Grid.Col md={12} lg={6} sm={12}>
              <Center>
                <a
                  href="https://git.io/streak-stats"
                  style={{ padding: "0.5rem" }}
                >
                  <img
                    className={classes.images}
                    alt="streak stats"
                    src="http://github-readme-streak-stats.herokuapp.com?user=GehanPasindhu&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&fire=1B0CDD"
                  />
                </a>
              </Center>
            </Grid.Col>
          </Grid>

          <Text
            size="xl"
            color="orange"
            style={{
              fontFamily: "'Audiowide', cursive",
              padding: "1rem",
            }}
            align="center"
            className={classes.title2}
          >
            Languages and Tools:
          </Text>

          <Grid gutter="md">
            <Grid.Col md={12} lg={6} sm={12}>
              <Center>
                <a href="https://github.com/anuraghazra/github-readme-stats">
                  <img
                    className={classes.images}
                    alt="readme"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=GehanPasindhu&layout=compact&langs_count=10"
                  />
                </a>
              </Center>
            </Grid.Col>
            <Grid.Col md={12} lg={6} sm={12}>
              <Center>
                <SimpleGrid cols={6} spacing={15} p="md">
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="Bootstrap">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                        alt="bootstrap"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="CSS">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="Figma">
                      <img
                        src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                        alt="figma"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="Git">
                      <img
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        alt="git"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="HTML">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="JavaScript">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="MySQL">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                        alt="mysql"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <Tooltip label="Node.js">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://www.php.net"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="PHP">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                        alt="php"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="React">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a href="https://spring.io/" target="_blank" rel="noreferrer">
                    <Tooltip label="Spring">
                      <img
                        src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                        alt="spring"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>

                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Tooltip label="TypeScript">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        alt="typescript"
                        width="40"
                        height="40"
                      />
                    </Tooltip>
                  </a>
                </SimpleGrid>
              </Center>
            </Grid.Col>
          </Grid>
        </Container>
      </MantineProvider>
    </div>
  );
}

export default ReactTalk;
