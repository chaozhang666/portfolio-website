import React from 'react';
import { useRef } from 'react';
import { createRef } from 'react';
import './hover.css';
import './App.css';
import { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import IMGsss from './img/sss.png';
import IMGcg from './img/cg.gif';
import IMGip from './img/ip.png';
import IMGad from './img/audio.png';
import IMGrfid from './img/rfid.png';
import Section from './components/Section';
import Footer from './components/Footer';
import { useMediaQuery } from 'react-responsive';
import Typing from './components/Typing';
// import { Anchor } from 'antd';
// const { Link } = Anchor;


function App() {

  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // })

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Cormorant Garamond'
    }
  });

  const headerStyle = {
    backgroundColor: '#111111',
    color: '#fff',
    padding: 18,
    position: 'fixed', 
    top: 0,
    width: '100%',
    zIndex: 999
  }

  const researchData = [
    {
      link: 'https://github.com/zzzchaozzz/Steganography',
      title: 'Steganography',
      img: IMGsss,
      li: ['New steganography algorithm.']
    },
    {
      link: 'https://github.com/zzzchaozzz/GIS-NavigationToolboxDevelopment',
      title: 'GIS',
      img: 'https://media.giphy.com/media/gjsFJuBQg6ABh59RTL/giphy.gif',
      li: ['City of Vancouver ArcGIS model.']
    },
    {
      link: 'https://github.com/zzzchaozzz/ComputerGraphics',
      title: 'Computer Graphics',
      img: IMGcg,
      li: ['Render images from raw CT data.']
    },
    {
      link: 'https://github.com/zzzchaozzz/ImageProcessing',
      title: 'Image Processsing', 
      img: IMGip,
      li: ['Contour Detection & Filters.']
    },
    {
      link: 'https://github.com/chaozhang666/computer-audio/blob/master/VoiceDisguiseResearchPaper_chaoZhang.pdf',
      title: 'Computer Audio', 
      img: IMGad,
      li: ['Identification of Voice Disguise']
    },
    {
      link: 'https://github.com/chaozhang666/NetworkCommunication/blob/master/GroupResearch.pdf',
      title: 'RFID Safety', 
      img: IMGrfid,
      li: ['Fractional Fourier Transform']
    }
  ];

  const projectData = [
    {
      link: 'https://web-dev-tutorial-eo8ezjk5c.vercel.app',
      title: 'Web Dev Tutorial',
      img: 'https://media.giphy.com/media/KwzTxTAFuiXKQ7ebri/giphy.gif',
      li: ['ReactJS & Ant Design']
    },  
    {
      link: 'https://search-country-info-n3jtsvhvj.vercel.app',
      title: 'REST Countries Info',
      img: 'https://media.giphy.com/media/NwLRiAWGOi33R4SimS/giphy.gif',
      li: ['Restful API']
    },
    {
      link: 'https://chi-noodlebar.com',
      title: 'Responsive Website',
      img: 'https://media.giphy.com/media/QYjvkJMSSkvPIq66mK/giphy.gif',
      li: ['A noodle bar in Vancouver.']
    },
    {
      link: 'https://earnest.education',
      title: 'Responsive Website',
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
      link: 'https://speech-recognition.chaozhang.vercel.app',
      title: 'Speach Recognition',
      img: 'https://media.giphy.com/media/HDmiGSoYfUImCRCL2S/giphy.gif',
      li: ['window.SpeechRecognition']
    },
    {
      link: 'https://remix-demo-chao.vercel.app',
      title: 'Music Remix',
      img: 'https://media.giphy.com/media/iFPQSxCPmEzeHTmaLE/giphy.gif',
      li: ['Online musical instruments.']
    },
    {
      link: 'https://to-do-list-peach.vercel.app',
      title: 'Todo List',
      img: 'https://media.giphy.com/media/ONyxD52Z8EXKYqxfq8/giphy.gif',
      li: ['Vanilla JS']
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
    },
    {
      link: 'https://javascript-slides.now.sh',
      title: 'JavaScript Slider',
      img: 'https://media.giphy.com/media/KBBMSwABohGtpBWd9m/giphy.gif',
      li: ['Based on slides.com library.']
    },
    {
      link: 'https://qqzhang.vercel.app',
      title: 'Web Teaching',
      img: 'https://media.giphy.com/media/9N4coJidDjycT1eeay/giphy.gif',
      li: ['Introduction to HTML & CSS']
    }
  ];

  const gameData = [
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
    }, 
    {
      link: 'https://shequ.codemao.cn/work/55306453',
      title: 'Block Tower',
      img: 'https://media.giphy.com/media/j5zwAHn8VZIYPZwjF0/giphy.gif',
      li: ['CodeMao Sandbox Project.']
    },
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
        move(research)
        break;
      case 'Project': 
        setProject(true);
        move(project)
        break;
      case 'Game': 
        setGame(true);
        move(game)
        break;
      case 'About': 
        setAbout(true);
        move(about)
        break;
      default:
        break;
    }
  }

  const handleLogo = () => {
    resetNavigationState();
    window.scrollTo({top: 0, behavior: 'smooth' });
  }

  const move = (e) => {
    let position = e.current.offsetTop - 100;
    window.scrollTo({top: position, behavior: 'smooth' })
  }

  const research = useRef();
  const project = useRef();
  const game = useRef();
  const about = useRef();

  return (
    <div className="App">
      <ThemeProvider ThemeProvider theme={theme}>

        {/* header  */}
        <Box style={headerStyle}> 
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
                    className='hvr-float'
                  >
                    Research
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isProject ? 'active' : undefined}             
                    className='hvr-float'
                  >
                    Project
                  </Typography>
                  <Typography 
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isGame ? 'active' : undefined}
                    className='hvr-float'
                  >
                    Game
                  </Typography>
                  <Typography
                    variant='h1'
                    onClick={handleNavigation}
                    className='nav-item'
                    className={isAbout  ? 'active' : undefined}
                    className='hvr-float'
                  >
                    About
                  </Typography>
                </Box>
            </Box>
          </Container>
        </Box> 

        {/* homepage  */}
        <div id='homepage'>
          <img 
              src='https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif' 
              width='240px'
              className='animate__animated animate__zoomInDown'
            />
          {/* <h1 style={{color:'whitesmoke'}} className='animate__animated animate__zoomIn'>Hi, I am Chao.</h1> */}
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
        <div ref={about} id='about' style={{paddingTop: '50px'}}>
          <h1 className='sectionTitle'>About Me</h1>
          <hr />
          <Container>
            <Grid
              container
              direction="row"
              justify="center"
              style={{marginBottom:'30px'}}
            >
              <Grid item xs={12} sm={4} style={{padding:'20px'}}>
                <Typography variant='h5'>
                  I am a professional Software Developer with M.Sc in Computer Science. Currently, I am working as a Front End Developer in React web projects and React-Native mobile projects. I use Javascript & Typescript everyday and they are my favourite programming languages. In my spare time, I love coding some fun projects and playing guitar.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4} style={{padding:'20px'}}>
                <Typography variant='h5'>
                  I am also a coding instructor teaching students HTML, CSS, JavaScript, Python and Block Coding(Codemao & Scratch). I established a coding club in 2019 Sep to provide students online coding education. It lets students quickly learn the fundamental of different programming languages in a fun way.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      
        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
