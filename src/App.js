import React from 'react';
import './App.css';
import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Cormorant Garamond'
    }
  });

  const [isResearch, setResearch] = useState(false);
  const [isProject, setProject] = useState(false);
  const [isGame, setGame] = useState(false);
  const [isAbout, setAbout] = useState(false);

  const resetNavigationState = () => {
    setResearch(false);
    setProject(false);
    setGame(false);
    setAbout(false);
  }

  const  handleNavigation = (e) => {
    resetNavigationState();
    switch(e.target.innerText) {
      case 'Research': 
        setResearch(true);
        break;
      case 'Project': 
        setProject(true);
        break;
      case 'Game': 
        setGame(true);
        break;
      case 'About': 
        setAbout(true);
        break;
      default:
        break;
    }
  }

  const handleLogo = () => {
    resetNavigationState();
  }

  return (
    <div className="App">

    <ThemeProvider ThemeProvider theme={theme}>
      <Box className='header'>    
        <Box className='container navigation'>
            <Typography className='logo nav-item' variant='h4' onClick={handleLogo}>portfolio</Typography>
            <Box className='nav-wrapper'>
              <Typography
                variant='h1'
                onClick={handleNavigation}
                className={isResearch ? 'active' : undefined}
                className='nav-item'
              >
                Research
              </Typography>
              <Typography
                variant='h1'
                className={isProject ? 'active' : undefined}
                onClick={handleNavigation}
                className='nav-item'
              >
                Project
              </Typography>
              <Typography 
                variant='h1'
                className={isGame ? 'active' : undefined}
                onClick={handleNavigation}
                className='nav-item'
              >
                Game
              </Typography>
              <Typography
                variant='h1'
                className={isAbout  ? 'active' : undefined}
                onClick={handleNavigation}
                className='nav-item'
              >
                About
              </Typography>
            </Box>
          </Box>
        </Box> 
        </ThemeProvider>




      <div className='homepage'>
        <img src='' />
        <h1>Hi, I am Chao.</h1>
      </div>


      <Box className='section1' id='research' >
        <Container>
          <h1>Research</h1>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <h1 style={{border: '1px solid', margin: '20px 40px'}}>dddd</h1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>dddd</h1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h1>dddd</h1>
            </Grid>
          </Grid>
        </Container>
      </Box>


    </div>
  );
}

export default App;
