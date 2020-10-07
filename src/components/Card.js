import React from 'react'
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

export default function Card(props) {

  const rootStyle = {
    backgroundColor: '#fff',
    color: 'black',
    textDecoration: 'none'
  }
  
  const titleStyle = {
    marginBottom: '10px',
    textAlign: 'center'
    // fontSize: '30px'
  }

  const listWrapperStyle = {
    marginTop: '20px',
    fontSize: '18px'
  }

  const imageStyle = {
    width: '100%',
    height: 'auto'
  }

  return (
    <div>
      <a href={props.link}>
        <div class='card'>
          <h2 style={titleStyle}>{props.name}</h2>
          <img src={props.src} style={imageStyle} />
          <ul style={listWrapperStyle}>
            {props.li.map(e => 
              <li>{e}</li>
            )}   
          </ul>
        </div>
      </a>
    </div>
  )
}
