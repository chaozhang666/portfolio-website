import React from 'react';
import { useRef } from 'react';
import { createRef } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import IMGcg from './images/cg.gif';
import IMGste from './images/sss.png';
import IMGpp from './images/ip1.png';
import Section from './components/Section';
import Footer from './components/Footer';
import { useMediaQuery } from 'react-responsive';

function App() {

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Cormorant Garamond'
    }
  });

  const headerStyle = {
    backgroundColor: '#fff',
    color: 'black',
    // boxShadow: '1px 2px 5px 3px grey',
    position: 'fixed', 
    top: 0,
    width: '100%'
  }

  const researchData = [
    {
      link: 'https://github.com/zzzchaozzz/ComputerGraphics',
      title: 'Computer Graphics',
      img: IMGcg,
      li: ['WPF Project.' , 'Display images from CT data.']
    },
    {
      link: 'https://github.com/zzzchaozzz/GIS-NavigationToolboxDevelopment',
      title: 'GIS - Python',
      img: 'https://media.giphy.com/media/gjsFJuBQg6ABh59RTL/giphy.gif',
      li: ['City of Vancouver ArcGIS model.' , 'Navigation toolbox developed by Python.']
    },
    {
      link: 'https://github.com/zzzchaozzz/Steganography',
      title: 'Steganography',
      img: IMGste,
      li: ['New steganography algorithm.']
    },
    {
      link: 'https://github.com/zzzchaozzz/ImageProcessing',
      title: 'Image Processsing',
      img: IMGpp,
      li: ['Contour detection & Functional Filters.']
    }
  ];

  const projectData = [
    {
      link: 'https://chi-noodlebar.com',
      title: 'Website',
      img: 'https://media.giphy.com/media/QYjvkJMSSkvPIq66mK/giphy.gif',
      li: ['A noodle bar in Vancouver.']
    },
    {
      link: 'https://earnest.education',
      title: 'Website',
      img: 'https://media.giphy.com/media/Tfvno6sueQThNHoqMP/giphy.gif',
      li: ['An education company in Richmond.']
    },
    {
      link: 'https://vocabulary-online-testing.vercel.app',
      title: 'Testing Quiz',
      img: 'https://media.giphy.com/media/dAFAYeeCbKARKyTcut/giphy.gif',
      li: ['Online vocabulary testing.']
    },
    {
      link: 'https://remix-demo-chao.vercel.app',
      title: 'Music Remix',
      img: 'https://media.giphy.com/media/iFPQSxCPmEzeHTmaLE/giphy.gif',
      li: ['Online musical instruments.']
    },
    {
      link: 'https://speed-typer.chaozhang.vercel.app',
      title: 'Speed Typer',
      img: 'https://media.giphy.com/media/ftpqOvDp71pp7xhGqH/giphy.gif',
      li: ['Typing game with diffenent levels.']
    },
    {
      link: 'https://exchange-rate-calculator.vercel.app',
      title: 'Exchange Rate Calculator',
      img: 'https://media.giphy.com/media/fvefr3DhTQxCISeLo0/giphy.gif',
      li: ['Live exchange rate API.']
    }
  ];

  const gameData = [
    {
      link: 'https://shequ.codemao.cn/work/55306453',
      title: 'Block Tower',
      img: 'https://media.giphy.com/media/j5zwAHn8VZIYPZwjF0/giphy.gif',
      li: ['CodeMao Sandbox Project.']
    },
    {
      link: 'https://shequ.codemao.cn/work/42058554',
      title: 'Street Fighter',
      img: 'https://media.giphy.com/media/jRqG23nkLBrA2EjJNE/giphy.gif',
      li: ['2 players action game.']
    },
    {
      link: 'https://shequ.codemao.cn/work/41879019',
      title: 'Plants vs Zombies',
      img: 'https://media.giphy.com/media/MFJSYLno1nJhItzf8L/giphy.gif',
      li: ['Tower defense game.']
    },
    {
      link: 'https://shequ.codemao.cn/work/40479714',
      title: 'Fruit Ninja',
      img: 'https://media.giphy.com/media/eivcydpAwlO2mcaHao/giphy.gif',
      li: ['Built with Physical Engine.']
    },
    {
      link: 'https://shequ.codemao.cn/work/39573606',
      title: 'Galaxy Defender',
      img: 'https://media.giphy.com/media/jSEFkGjYnuYc2hNfnd/giphy.gif',
      li: ['Cloud data for global ranking.']
    },
    {
      link: 'https://shequ.codemao.cn/work/53786143',
      title: 'Super Mario',
      img: 'https://media.giphy.com/media/dscP9pamgfPUy04COQ/giphy.gif',
      li: ['Super mario dodge game.']
    },
    {
      link: 'https://shequ.codemao.cn/work/41502488',
      title: 'Shooting Monsters',
      img: 'https://media.giphy.com/media/cIz8XfXQLaKcN0Bqzg/giphy.gif',
      li: ['Shooting game with 6 levels.']
    },
    {
      link: 'https://shequ.codemao.cn/work/38969359',
      title: 'Speeding Car',
      img: 'https://media.giphy.com/media/Uu5haIEQHOUjf9QIYx/giphy.gif',
      li: ['Car racing game with different props.']
    },
    {
      link: 'https://shequ.codemao.cn/work/40814673',
      title: 'Falppy Bird',
      img: 'https://media.giphy.com/media/MdpKPGAmbDStbWOjef/giphy.gif',
      li: ['Built with Physical Engine.']
    },
    {
      link: 'https://shequ.codemao.cn/work/39573573',
      title: 'Bouncing Ball',
      img: 'https://media.giphy.com/media/ihvScUYUtjGmxEdDBK/giphy.gif',
      li: ['Built with Physical Engine.']
    },
    {
      link: 'https://shequ.codemao.cn/work/39501914',
      title: 'AI Face',
      img: 'https://media.giphy.com/media/LMQ737ZzfdQFt4SGwU/giphy.gif',
      li: ['Face recognition with AI Engine.']
    },
    {
      link: 'https://shequ.codemao.cn/work/38185525',
      title: 'Assasin Running',
      img: 'https://media.giphy.com/media/YPKazjQpeFnevzU6vZ/giphy.gif',
      li: ['Dodge game with different levels.']
    },
    {
      link: 'https://shequ.codemao.cn/work/39429214',
      title: 'Square Dash',
      img: 'https://media.giphy.com/media/W0c6V824Q5XLHVFkrr/giphy.gif',
      li: ['Dash game with different props.']
    },
    {
      link: 'https://shequ.codemao.cn/work/38147591',
      title: 'No BB Fly',
      img: 'https://media.giphy.com/media/TLUbkUiYFC1fZxQkvS/giphy.gif',
      li: ['Codemao start project.']
    }
  ];

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
    window.scrollTo({top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className="App">
      <ThemeProvider ThemeProvider theme={theme}>

        {/* header  */}
        <Box style={headerStyle}> 
          <Container>
            <Box
              m={3} 
              display='flex'
              flexDirection='row'
              justifyContent="space-between"
              alignItems='center'
            >
              <Typography 
                className='nav-item' 
                variant='h4' 
                onClick={handleLogo}
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
        <Box id='homepage'>
          <img 
            src='https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif' 
            width='240px'
          />
          <Typography variant='h4' paddingTop={2}>
            Hi, I am Chao.
          </Typography>
        </Box>

        <Section data={researchData} name='Research' id='research' />
        <Section data={projectData} name='Project' id='project' />
        <Section data={gameData} name='Game' id='game' />

        {/* about  */}
        <Box id='about'>
          <Typography variant='h3' paddingTop={2} className='sectionTitle'>
            About Me
          </Typography>
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{margin: '0 30px'}}
            >
              <Grid item xs={12} sm={6} style={{padding: isTabletOrMobileDevice? '20px' : '60px 80px' }}>
                <Typography variant='h5'>
                  I am a creative Developer with M.Sc in Computer Science. My programming experience includes Python, JavaScript, Java, C, C++, C#, Swift, Latex and Logo. My research and projects cover Image Processing, Computer Graphics, GIS, AI, Face Recognition, Steganography, Web Development, etc.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{padding: isTabletOrMobileDevice? '20px' : '60px 80px' }}>
                <Typography variant='h5'>
                  I am also a coding instructor teaching Web Development, Java for AP CS, Python for intro to CS and Codemao & Scratch in building game by blocks. I established Earnest Education Coding Club in Richmond, BC since 2019 Sep which lets students learn different programming languages in a fun way.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      
        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
