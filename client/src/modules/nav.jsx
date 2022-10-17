import React from "react";
import "./estilos/nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navf">
      <Link to="/" className="btnnav">
        <button className="btnnav">HOME</button>
      </Link>
      <span id="navtxt">COUNTRIES</span>
      <Link to="/crearActividad" className="btnnav">
      <button className="btnnav">Crear Actividad</button>
      </Link>
    </div>
  );
}

export default Nav;
