import React from 'react'
import './Card.css'
export default function Card(props) {

  const listWrapperStyle = {
    marginTop: '20px',
    fontSize: '16px'
  }

  const imageStyle = {
    width: '100%',
    height: 'auto'
  }

  return (
    <div>
      <a href={props.link}>
        <div className='card'>
          <h2 className='title'>{props.name}</h2>
          <img src={props.src} style={imageStyle} />
          <ul style={listWrapperStyle}>
            {props.li.map(e => 
              <li className='li'>{e}</li>
            )}   
          </ul>
        </div>
      </a>
    </div>
  )
}
