import React from 'react'
import Socials from '../Socials'
import './Section_1.css'
import {motion} from 'framer-motion'
import Boton1 from '../Section_3/Boton1'

const Section_1 = (props) => {

  return (
    <div className='contenedor_home'>
        <div
        className='home_introduccion'>
          <h1>Des-Ink</h1>
          <div className='home_introduccion_2'>
            <h2>Crea tu propio</h2>
              <section className='animacion'>
                <div className='first'>
                  <div className='estilo'>
                    Estilo
                  </div>
                </div>
                <div className='second'>
                  <div className='look'>
                    Look
                  </div>
                </div>
                <div className='third'>
                  <div className='camino'>
                    Camino
                  </div>
                </div>
              </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure corporis adipisci necessitatibus voluptate. Repudiandae consequuntur exercitationem architecto sapiente sequi
            doloremque commodi suscipit sit odit officia sint quae,
              consectetur distinctio.</p>
              <Boton1 estilo='section_3_boton_1' direccion="/productos" texto_boton="Selección de productos"/>
              <Socials/>
        </div>
        <div 
        className='home_foto'>
          <img src={props.imagen} alt='foto_home'/>
        </div>
      </div>
  )
}

export default Section_1