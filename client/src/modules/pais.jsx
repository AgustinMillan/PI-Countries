import React from 'react'
import "./estilos/pais.css"
function Pais({img, nombre, continente}) {
  return (
    <div className='CardPaisHome'>
        <img src={img} className="imgCard" alt='imgpais'/>
        <span id="nombreDePais">{nombre}</span>
        <span id="continenteDePais">{continente}</span>
    </div>
  )
}

export default Pais