import React from 'react'
import "./estilos/landing.css"
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className='fondo'>
        <div className='pani1cont'>
            <h2>¡BIENVENID@!</h2>
            <span id="btxt">Espero estes listo para explorar el mundo conmigo.</span><br></br>
            <Link to="/home"><button id="explorarbtn">EXPLORAR</button></Link>
        </div>
    </div>
  )
}

export default Landing