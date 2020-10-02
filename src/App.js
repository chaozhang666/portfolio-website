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

        {/* header  */}
        <Box className='header'>    
          <Container>
            <Box
              m={3} 
              display='flex'
              flexDirection='row'
              justifyContent="space-between"
              alignItems='center'
            >
              <Typography 
                className='logo nav-item' 
                variant='h4' 
                onClick={handleLogo}
                dispaly='inline'
              >
                portfolio
              </Typography>
              <Box className='nav-wrapper'>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isResearch ? 'active' : undefined}
                  >
                    Research
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isProject ? 'active' : undefined}
                  >
                    Project
                  </Typography>
                  <Typography 
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isGame ? 'active' : undefined}
                  >
                    Game
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isAbout  ? 'active' : undefined}
                  >
                    About
                  </Typography>
                </Box>
            
            </Box>
          </Container>
        </Box> 

        {/* homepage  */}
        <Box className='homepage'>
          <img src='' />
          <Typography variant='h3' paddingTop={2}>
            Hi, I am Chao.
          </Typography>
        </Box>
        
        {/* research  */}
        <Box className='section' id='research'>
          <Container>
            <Box p={5}>
              <Typography variant='h4' style={{margin: '30px'}}>
                Research
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <h1 style={{border: '1px solid', margin: '20px 40px'}}>dddd</h1>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h1>dddd</h1>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <h1>dddd</h1>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

      </ThemeProvider>
    </div>
  );
}

export default App;
