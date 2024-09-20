import React from 'react'
import '../styles/Parrafos.css'

export default function Paragrafo(props) {
  return (
    <div id="box-textos">
      <p>{props.contenido}</p>
      <br/>
    </div>
    
  )
}
