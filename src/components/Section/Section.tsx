import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Card from '../Card/Card';
import { useMediaQuery } from 'react-responsive';
import './Section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section(props : any) {

  AOS.init();

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  return (
    <div className='section'>
      <Container>
        <div>
          <h1 className='sectionTitle myTextShadow' 
          data-aos="zoom-in" data-aos-once="false"
          >{props.name}</h1>
          <h3 data-aos="fade-in" data-aos-once="false" 
          className='sectionSubTitle myTextShadow'>{props.subtitle}</h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.data.map((e : any) => 
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
