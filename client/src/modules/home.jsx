import React, { useState } from "react";
import { useEffect } from "react";
import "./estilos/home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaises } from "../redux/actions";
import Pais from "./pais";
import Paginado from "./paginado";

function Home() {
  const dispatch = useDispatch();
  let paises = useSelector((state) => state.paises);
  const [pagina, setPagina] = useState(1);
  const [porPag, setPorPag] = useState(9);
  const maximo = paises.length / porPag;
  let listpaises = paises.slice(
    (pagina - 1) * porPag,
    (pagina - 1) * porPag + porPag
  );
  useEffect(() => {
    dispatch(getAllPaises());
  }, []);
  return (
    <div className="fondoh">
      <div className="busquedaHome">
        <input id="inputBusq" type="text" autoComplete="off" />
        {/* <button id="btnBusqueda">Buscar</button> */}
      </div>
      <div className="contenedorph">
        <div id="listadoPaisesHome">
          {listpaises &&
            listpaises.map((e) => (
              <Pais
                key={e.id}
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
  );
}

export default Home;
