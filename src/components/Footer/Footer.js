import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import './Footer.css'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  const rootStyle = {
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#fff',
    fontSize: '20px',
    padding: '30px'
  }

  const titleStyle = {
    marginBottom: '14px',
    fontSize: '28px'
  }

  return (
    <div>
      <Box style={rootStyle}>
        <Container>
          <Grid    
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice? '20px' : '30x' }}>
              <Typography variant='h5' style={titleStyle}>
                Location
              </Typography>
              <Typography variant='p'>
                Metrotown, Burnaby, BC
              </Typography>
              <br />
              <Typography variant='p'>
                V5H 4N2
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice? '20px' : '30x' }}>
              <Typography variant='h5' style={titleStyle}>
              Around Me
              </Typography>
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
              <Typography variant='h5' style={titleStyle}>
                Contact Me
              </Typography>
              <Typography variant='p'>
                Please feel free to contact me if you are interested in my projects.
              </Typography>
            </Grid>
          </Grid>
          
        </Container>
        <p style={{marginTop: '30px', fontSize: 16}}>© 2020 Chao Zhang</p>
      </Box>
    </div>
  )
}
