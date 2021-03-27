import "./App.css";
import "./Mobile.css";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Typing from "./components/Typing/Typing";
import { researchData, projectData } from "./Data";
import GitHubIcon from "@material-ui/icons/GitHub";
import smoothscroll from "smoothscroll-polyfill";

function App() {
  smoothscroll.polyfill();

  const [headerPadding, setHeaderPadding] = useState(40);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  const [buttonClasses, setButtonClasses] = useState("menu-btn");

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Cormorant Garamond",
    },
  });

  const webHeaderStyle: any = {
    backgroundColor: "#131313",
    color: "#ffffff",
    paddingTop: headerPadding,
    paddingBottom: headerPadding,
    paddingLeft: 20,
    paddingRight: 20,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 999,
    transition: "1.0s",
  };

  const handleNavigation = (e: any) => {
    switch (e.target.innerText) {
      case "Research":
        move(research);
        break;
      case "Project":
        move(project);
        break;
      case "Game":
        move(game);
        break;
      case "About":
        move(about);
        break;
      default:
        break;
    }
  };

  const move = (e: any) => {
    let position = e.current.offsetTop;
    position -= isMobileDevice ? 50 : 0;
    window.scroll({ top: position, behavior: "smooth" });
  };

  // scroll progress bar
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    const myElement = document.getElementById("myBar")!;
    myElement.style.width = scrolled + "%";
    if (scrolled > 1) {
      setHeaderPadding(20);
      // setIsShow(true);
    } else {
      setHeaderPadding(40);
      // setIsShow(false);
    }
  }

  const research = useRef<HTMLInputElement>(null);
  const project = useRef<HTMLInputElement>(null);
  const game = useRef<HTMLInputElement>(null);
  const about = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (isMenuOpen) {
      setButtonClasses("menu-btn");
    } else {
      setButtonClasses("menu-btn open");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={webHeaderStyle}>
          <Container>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <h1
                id="logo"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="animate__animated animate__fadeIn"
              >
                Portfolio
              </h1>
              <Box className="nav-wrapper animate__animated animate__fadeIn">
                <Typography variant="h1" onClick={handleNavigation}>
                  Project
                </Typography>
                <Typography
                  variant="h1"
                  onClick={handleNavigation}
                  className="nav-item"
                >
                  Research
                </Typography>
                <Typography
                  variant="h1"
                  onClick={handleNavigation}
                  className="nav-item"
                >
                  About
                </Typography>
              </Box>
              {/* mobile header  */}
              <div
                id="mobileHeader"
                style={{ display: isMobileDevice ? "initial" : "none" }}
              >
                <div className={buttonClasses} onClick={handleButtonClick}>
                  <div className="menu-btn__burger"></div>
                </div>
              </div>
            </Box>
          </Container>

          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>

          <div
            style={{
              display: isMenuOpen && isMobileDevice ? "initial" : "none",
            }}
          >
            <div className="mobile-nav animate__animated animate__fadeInRight">
              <h1 className="myTextShadow" onClick={handleNavigation}>
                Project
              </h1>
              <h1 className="myTextShadow" onClick={handleNavigation}>
                Research
              </h1>
              {/* <h1 className='myTextShadow' onClick={handleNavigation}>Game</h1> */}
              <h1 className="myTextShadow" onClick={handleNavigation}>
                About
              </h1>
            </div>
          </div>
        </div>

        {/* homepage  */}
        <div id="homepage">
          <a href="https://codingfun.dev/">
            <div className="codingfun animate__animated animate__zoomInDown"></div>
          </a>

          <Typing
            strings={[
              "Hi, I'm Chao Zhang",
              "A creative Software Developer 💡",
              "Click 😺 above to my education start up 👆🏻 <br/> or <br/> Find some of my work below 👇🏻",
            ]}
          />
        </div>

        <div ref={project} id="project">
          <Section
            data={projectData}
            name="Project"
            subtitle="< Some of my previous work and open source projects. >"
          />
        </div>

        <div ref={research} id="research">
          <Section
            data={researchData}
            name="Research"
            subtitle="< Some of my original research paper and proejcts. >"
          />
        </div>

        {/* about  */}
        <div ref={about} id="about" style={{ paddingTop: "10px" }}>
          <h1 className="sectionTitle myTextShadow">About Me</h1>
          <h3
            className="sectionSubTitle myTextShadow"
            style={{ padding: "0 30px" }}
          >
            {" "}
            &lt; Developer & Instructor &gt;
          </h3>
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              style={{ paddingBottom: "80px" }}
            >
              <Grid
                item
                xs={12}
                sm={4}
                style={{ padding: "20px", textAlign: "justify" }}
              >
                <Typography variant="h5" className="myTextShadow">
                  I am a professional Software Developer. Currently, I am
                  working on Vue.js, React.js and React Native projects. In my
                  spare time, I love making some fun projects, teaching students
                  coding and playing guitar.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                style={{ padding: "20px", textAlign: "justify" }}
              >
                <Typography variant="h5" className="myTextShadow">
                  I established{" "}
                  <a href="https://codingfun.dev/" style={{ color: "#ffb310" }}>
                    Coding Fun Education
                  </a>{" "}
                  in 2019 Sep to provide students with online coding education.
                  It lets students quickly learn the fundamental of different
                  programming languages in a fun way.
                </Typography>
              </Grid>
            </Grid>

            <div
              className="githubBtnWapper"
              style={{ width: "100%", textAlign: "center" }}
            >
              <a href="https://github.com/chaozhangdev">
                <div className="githubBtn">
                  <GitHubIcon className="githubIcon" fontSize="large" />
                  <h3 style={{ display: "inline-block" }}>Link to My Github</h3>
                </div>
              </a>
            </div>
          </Container>
        </div>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
