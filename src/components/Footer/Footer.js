import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import './Footer.css'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {

  const year = new Date().getFullYear();

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  return (
    <div>
      <Box className='footer-container'>
        <Container>
          <Grid    
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice? '20px' : '30x' }}>
              <h1 className='title myTextShadow'>Location</h1>
              <h4 className='myTextShadow'>Metrotown, Burnaby, BC</h4>
              <h4 className='myTextShadow'>V5H 4N2</h4>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice? '20px' : '30x' }}>
              <h1 className='title myTextShadow'>Around Me</h1>
              <a href="mailto: raidenchao@gmail.com">
                <EmailIcon className='icons' fontSize="large"/>
              </a>
              <a href='https://github.com/chaozhang666'>
                <GitHubIcon className='icons' fontSize="large"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100014959716281">
                <FacebookIcon className='icons' fontSize="large"/>
              </a>     
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice? '20px' : '30px' }}>
              <h1 className='title myTextShadow'>Contact Me</h1>
              <h4 className='myTextShadow'>Please feel free to contact me if you are interested in my projects.</h4>
            </Grid>
          </Grid>
          
        </Container>
        <p className='myTextShadow' style={{marginTop: '30px', fontSize: 16}}>© {year} Chao Zhang</p>
      </Box>
    </div>
  )
}
