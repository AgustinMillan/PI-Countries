import React from "react";
import "./estilos/nav.css";
import { Link, useParams } from "react-router-dom";
import img from "../img/planetapng.png";
function Nav() {
  const {s,id} = useParams();
  let result = "";
  if(s==="s"){
    result = "navfs"
  }else if(s==="e"){
    result = "navfe"
  }else if(id){
    result= "navfide"
  }
  console.log(id)
  return (
    <div className={result?result:"navf"}>
      <div>
        <img src={img} alt="as" id="imgpng" />

        <span id="navtxt">COUNTRIES</span>
      </div>
      <div className="btnnav">
        <Link to="/" className="btnnav">
          <button className="btnnav">Inicio</button>
        </Link>
        <Link to="/home" className="btnnav">
          <button className="btnnav">Busqueda</button>
        </Link>
        <Link to="/crearActividad/s" className="btnnav">
          <button className="btnnav">Crear Actividad</button>
        </Link>
        <Link to="/centroDeActividades/e" className="btnnav">
          <button className="btnnav">Centro de Actividades</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
