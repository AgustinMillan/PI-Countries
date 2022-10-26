import React, { useState } from "react";
import { useEffect } from "react";
import "./estilos/home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaises, getFilt, cambiarCont, cambAF } from "../redux/actions";
import Pais from "./pais";
import Paginado from "./paginado";
import Ordenfiltro from "./ordenfiltro";

function Home() {
  const dispatch = useDispatch();
  let paises = useSelector((state) => state.paises);
  const [pagina, setPagina] = useState(1);
  const [porPag, setPorPag] = useState(9);
  const [camB, setCamB] = useState("");
  const maximo = paises.length / porPag;
  let listpaises = paises.slice(
    (pagina - 1) * porPag,
    (pagina - 1) * porPag + porPag
  );
  useEffect(() => {
    let aux;
    if (camB === "") {
      dispatch(getAllPaises());
      dispatch(cambAF(true));
    } else {
      if (!paises.length) {
        dispatch(getFilt(camB));
      } else {
        aux = paises.filter((e) =>
          e.nombre.toLowerCase().includes(camB.toLowerCase())
        );
        dispatch(cambiarCont(aux));
      }
    }
  }, [dispatch, camB]);

  function handleChange(e) {
    e.preventDefault();
    setCamB(e.target.value);
    setPagina(1);
  }
  return (
    <div className="fondoh">
      <div className="busquedaHome">
        <Ordenfiltro />
        <input
          id="inputBusq"
          type="text"
          autoComplete="off"
          placeholder="Buscar..."
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="conthomecompleto">
        <div className="contenedorOrdenamiento"></div>
        <div className="contenedorph">
          <div id="listadoPaisesHome">
            {listpaises &&
              listpaises.map((e) => (
                <Pais
                  key={e.id}
                  id={e.id}
                  img={e.imgB}
                  nombre={e.nombre}
                  continente={e.continente}
                />
              ))}
          </div>
          <Paginado
            pagina={pagina}
            setPagina={setPagina}
            maximo={maximo}
            setPorPag={setPorPag}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
