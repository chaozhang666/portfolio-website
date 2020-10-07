import React from 'react'
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Card from './Card';
import { useMediaQuery } from 'react-responsive';
import { Divider } from '@material-ui/core';

export default function Section(props) {

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  return (
    <div className='section'>
      <Container>
        <div>
          <h1 className='sectionTitle'>{props.name}</h1>
          <hr />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.data.map(e => 
              <Grid item xs={12} sm={4} style={{padding: isTabletOrMobileDevice ? 20 : 30 }}>
                <Card 
                  name={e.title} 
                  src={e.img} 
                  link={e.link} 
                  li={e.li}
                />
              </Grid>
            )}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
