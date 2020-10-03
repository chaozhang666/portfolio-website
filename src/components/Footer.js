import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

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
    fontSize: '20px'
  }

  const titleStyle = {
    marginBottom: '14px',
    fontSize: '28px'
  }

  const iconStyle = {
    margin: '10px',
    fontSize: '30px'
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
              <EmailIcon style={iconStyle} />
              <GitHubIcon style={iconStyle} />
              <FacebookIcon style={iconStyle} />
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
      </Box>
    </div>
  )
}
