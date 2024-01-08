import React from 'react'
import './Boton_3.css'

const Boton_3 = () => {
  return (
    <div className='section_boton'>
    <a onClick={props.onClick} href={props.path}><span>{props.texto_boton}</span></a>        
</div>
  )
}

export default Boton_3