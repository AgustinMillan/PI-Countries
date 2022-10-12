import React from "react";
import { Link } from "react-router-dom";
import "./estilos/pais.css";
function Pais({ id ,img, nombre, continente }) {
  return (
    <Link to={`/country/${id}`}>
      <div className="CardPaisHome">
        <img src={img} className="imgCard" alt="imgpais" />
        <span id="nombreDePais">{nombre}</span>
        <span id="continenteDePais">{continente}</span>
      </div>
    </Link>
  );
}

export default Pais;
