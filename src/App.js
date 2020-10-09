import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './hover.css';
import './App.css';
import './Mobile.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';
import Typing from './components/Typing/Typing';
import { researchData, projectData, gameData } from './Data';
import GitHubIcon from '@material-ui/icons/GitHub';
import smoothscroll from 'smoothscroll-polyfill';

function App() {

  smoothscroll.polyfill();
  // window.__forceSmoothScrollPolyfill__ = true;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonClasses, setButtonClasses] = useState("menu-btn");

  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 768px)'
  })

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Cormorant Garamond'
    }
  });

  const webHeaderStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: isMobileDevice ? 10 : 20,
    position: 'fixed', 
    top: 0,
    width: '100%',
    zIndex: 999,
    transition: 1
  }

  // window.onscroll = () => {
  //   console.log(document.documentElement.scrollTop);
  // }

  const  handleNavigation = (e) => {
    switch(e.target.innerText) {
      case 'Research': 
        move(research)
        break;
      case 'Project': 
        move(project)
        break;
      case 'Game': 
        move(game)
        break;
      case 'About': 
        move(about)
        break;
      default:
        break;
    }
  }

  const move = (e) => {
    let position = e.current.offsetTop;
    position -= isMobileDevice ? 100 : 50;
    window.scroll({ top: position, behavior: 'smooth' });

    // smoothscroll.polyfill({top: position, behavior: 'smooth' });
    // window.scrollTo({top: position, behavior: 'smooth' })
  }

  const research = useRef();
  const project = useRef();
  const game = useRef();
  const about = useRef();

  const handleButtonClick = () => {
    if(isMenuOpen) {
      setButtonClasses("menu-btn");
    } else {
      setButtonClasses("menu-btn open");
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      <ThemeProvider ThemeProvider theme={theme}>
        <div style={webHeaderStyle}>
          <Container>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent="space-between"
              alignItems='center'
              className='animate__animated animate__zoomInRight'
            >
              <Typography 
                className='nav-item' 
                variant='h4' 
                onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })}}
                dispaly='inline'
                className='logo' 
              >
                Portfolio
              </Typography>

              <Box className='nav-wrapper'>            
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                  >
                    Research
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                  >
                    Project
                  </Typography>
                  <Typography 
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                  >
                    Game
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                  >
                    About
                  </Typography>
                </Box>
              {/* mobile header  */}
              <div id='mobileHeader' style={{display: isMobileDevice ? "initial" : 'none'}}>
                <div className={buttonClasses} onClick={handleButtonClick}>
                  <div className='menu-btn__burger'></div>
                </div>              
              </div>  
            </Box>
          </Container>

          <div style={{display: isMenuOpen && isMobileDevice ? 'initial' : 'none'}}>
            <div className='mobil-nav animate__animated animate__fadeInRight'>
                <h1 onClick={handleNavigation}>Research</h1>
                <h1 onClick={handleNavigation}>Project</h1>
                <h1 onClick={handleNavigation}>Game</h1>
                <h1 onClick={handleNavigation}>About</h1>
            </div>
          </div>

        </div> 

        {/* homepage  */}
        <div id='homepage'>
          <img 
            src='https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif' 
            width='240px'
            className='animate__animated animate__zoomInDown'
            style={{marginBottom:100}}
          />
          <Typing 
            strings={[
              "Hi, I'm Chao Zhang",
              'A Front End Developer 💡',
              'My skills include:',
              'HTML, CSS, JS, TS, React, React Native, Vue ...',
              'Find my work below 👇'
            ]} 
            className='animate__animated animate__zoomIn'
            />
        </div>

        <div ref={research} id='research'>
          <Section data={researchData} name='Research' />
        </div>

        <div ref={project} id='project'>
          <Section data={projectData} name='Project' />
        </div>

        <div ref={game} id='game'>
          <Section data={gameData}  name='Game' />
        </div>

        {/* about  */}
        <div ref={about} id='about' style={{paddingTop: '10px'}}>
          <h1 className='sectionTitle'>About Me</h1>
          <hr />
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              style={{paddingBottom:'80px',color: '#fff'}}
            >
              <Grid item xs={12} sm={4} style={{padding:'20px', textAlign: 'justify'}}>
                <Typography variant='h5'>
                  I am a professional Software Developer with M.Sc in Computer Science. Currently, I am working as a Front End Developer in React web projects and React-Native mobile projects. I use Javascript & Typescript everyday and they are my favourite programming languages. In my spare time, I love coding some fun projects and playing guitar.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} style={{padding:'20px', textAlign: 'justify'}}>
                <Typography variant='h5'>
                  I am also a coding instructor teaching students HTML, CSS, JavaScript, Python and Block Coding(Codemao & Scratch). I established a coding club in 2019 Sep to provide students online coding education. It lets students quickly learn the fundamental of different programming languages in a fun way.
                </Typography>
              </Grid>
            </Grid>

            <a href='https://github.com/chaozhang666'>
              <div className='githubBtnWapper' style={{width: '100%', textAlign: 'center'}}>
                <div className='githubBtn'>
                  <GitHubIcon className='githubIcon' fontSize="large" />
                  <h3 style={{display:"inline-block"}}>Link to my Github Account</h3>
                </div>
              </div>
            </a>

          </Container>
        </div>
      
        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
