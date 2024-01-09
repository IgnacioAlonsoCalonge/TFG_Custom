import React from 'react'
import './Boton1.css'
import './Boton4.css'
import { Link } from 'react-router-dom'

const Boton1 = (props) => {

  const arriba=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  };

  return (
    <div className={props.estilo}>
        <Link to={props.direccion} onClick={arriba}><span>{props.texto_boton}</span></Link>        
    </div>
  )
}

export default Boton1