import React from 'react'
import './Card.css'

export default function Card(props : any) {
  return (
    <div>
      <a href={props.link}>
        <div className='card '>
          <h2 className='cardTitle myTextShadow'>{props.name}</h2>
          <img src={props.src} className='cardImage' alt='project images' />
          <ul className='listWrapper'>
            {props.li.map((e : any) => 
              <li className='li myTextShadow'>{e}</li>
            )}   
          </ul>
        </div>
      </a>
    </div>
  )
}
