import React, { useEffect } from "react";
import "./estilos/detallepais.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { cambDetail, getDetail } from "../redux/actions";

function PaisDetail() {
  let { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(name));
    return dispatch(cambDetail({}))
  }, [dispatch,name]);
  const pais = useSelector((state) => state.detalles);
  return (
    <div className="detallepais">
      <div className="cardfont">
        <div className="salir">
          <Link to="/home">
            <button className="btnsalir">
              <svg
                width="20"
                height="27"
                viewBox="0 0 20 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2853 26.5151C19.0696 26.6273 18.8274 26.6786 18.5848 26.6636C18.3421 26.6485 18.1081 26.5677 17.9079 26.4297L0.574034 14.4294C0.39691 14.3066 0.252165 14.1428 0.152193 13.9519C0.0522213 13.7611 0 13.5488 0 13.3333C0 13.1178 0.0522213 12.9056 0.152193 12.7147C0.252165 12.5238 0.39691 12.36 0.574034 12.2373L17.9079 0.236891C18.108 0.0984771 18.3421 0.0174242 18.5849 0.0025091C18.8277 -0.012406 19.0699 0.039385 19.2854 0.152274C19.5009 0.265163 19.6814 0.434849 19.8073 0.642958C19.9333 0.851067 19.9999 1.08967 20 1.33293V25.3337C20 25.5771 19.9335 25.8159 19.8075 26.0241C19.6815 26.2324 19.5009 26.4021 19.2853 26.5151Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <span className="nombredetail">{pais.nombre}|| #{pais.id}</span>
        <div className="contdetalles">
          <span className="detalles">Continente: {pais.continente}</span>
          <span className="detalles">Capital: {pais.capital}</span>
          <span className="detalles">Area: {pais.area}</span>
          <span className="detalles">Poblacion: {pais.poblacion}</span>
          <span className="detalles">
            Actividades:
            {pais.actividades &&
              pais.actividades.map((e) => (
                <span>
                  <Link
                    to={`/centroDeActividades/${e.id}`}
                  >
                    {e.nombre.nombre}
                  </Link>
                </span>
              ))}
          </span>
        </div>
        <img src={pais.imgB} id="imgdetail" alt="imagen" />
      </div>
    </div>
  );
}

export default PaisDetail;
