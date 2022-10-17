import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaises, postActividad } from "../redux/actions";
import {Link} from "react-router-dom"
import "./estilos/crear.css";
function Crear() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.paises);
  const [lista, setLista] = useState([]);
  const [input, setInput] = useState({
    nombre: "",
    dificultad: 0,
    duracion: 0,
    temporada: "",
    paises: [],
  });
  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.nombre) {
      errors.nombre = "Necesitamos un nombre";
    } else if (input.nombre.length <= 2) {
      errors.nombre = "El nombre debe tener mas de dos letras";
    }
    if (!input.dificultad) {
      errors.dificultad = "Selecciona una dificultad";
    } else if (input.dificultad < 1 || input.dificultad > 5) {
      errors.dificultad = "la dificultad debe ser entre 1 y 5";
    }
    if (!input.duracion) {
      errors.duracion = "Necesitamos que coloques una duracion";
    }
    if (!input.temporada || input.temporada === "none") {
      errors.temporada = "Porfavor selecciona una temporada";
    }
    if (!lista.length) {
      errors.pais = "Porfavor selecciona por lo menos Pais";
    }
    return errors;
  }
  useEffect(() => {
    dispatch(getAllPaises());
    setInput({
      ...input,
      paises: lista,
    });
    if (lista.length) {
      setErrors(validate({ ...input, paises: lista }));
    }
  }, [lista]);

  function añadirPais(e) {
    let valor = e.target.value;
    if (valor !== "paises") {
      setLista([...lista, valor]);
    }
    return;
  }
  function quitarPais(e) {
    e.preventDefault();
    let quitar = e.target.value;
    let copia = lista;
    setLista(copia.filter((i) => i !== quitar));
  }
  function onSubmit(e) {
    e.preventDefault();
    if (
      errors.nombre ||
      errors.dificultad ||
      errors.duracion ||
      errors.temporada ||
      errors.paises
    ) {
      return alert("Porfavor revisa el formulario");
    } else {
      dispatch(postActividad(input));
      alert("Actividad creada");
      setInput({
        nombre: "",
        dificultad: 0,
        duracion: 0,
        temporada: "",
        paises: [],
      });
      setLista([]);
    }
  }
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  }
  return (
    <div className="contgeneralcrear">
      <div className="contenedorgnrlform">
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
        <span id="crearspan">CREAR ACTIVIDAD</span>
        <form className="formcrear" onSubmit={onSubmit}>
          <span className="spanform">Nombre de la actividad</span>
          <input
            type="text"
            name="nombre"
            value={input.nombre}
            onChange={handleInputChange}
            autoComplete="off"
            className={errors.nombre ? "danger" : "inputform"}
          />
          {errors.nombre && <span className="danger">{errors.nombre}</span>}

          <span className="spanform">Dificultad</span>
          <input
            type="number"
            name="dificultad"
            value={input.dificultad}
            onChange={handleInputChange}
            autoComplete="off"
            className={errors.dificultad ? "danger" : "inputform"}
          />
          {errors.dificultad && (
            <span className="danger">{errors.dificultad}</span>
          )}

          <span className="spanform">Duracion</span>
          <input
            type="number"
            name="duracion"
            value={input.duracion}
            onChange={handleInputChange}
            autoComplete="off"
            className={errors.duracion ? "danger" : "inputform"}
          />
          {errors.duracion && <span className="danger">{errors.duracion}</span>}

          <span className="spanform">Temporada</span>
          <select
            name="temporada"
            value={input.temporada}
            onChange={handleInputChange}
            className={errors.temporada ? "danger" : "inputform"}
          >
            <option value="none">Select</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {errors.temporada && (
            <span className="danger">{errors.temporada}</span>
          )}

          <span className="spanform">Paises</span>
          <select
            onChange={(e) => añadirPais(e)}
            name="paises"
            value={input.pais}
            className={errors.pais ? "danger" : "inputform"}
          >
            <option>paises</option>
            {list &&
              list.map((e) => (
                <option key={e.id} value={e.nombre}>
                  {e.nombre}
                </option>
              ))}
          </select>
          {lista &&
            lista.map((e) => (
              <button key={e} value={e} onClick={(e) => quitarPais(e)}>
                {e}
              </button>
            ))}
          {errors.pais && <span className="danger">{errors.pais}</span>}
          <input type="submit" value="Crear" id="btnsubmit" />
        </form>
      </div>
    </div>
  );
}

export default Crear;
