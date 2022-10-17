import { useState } from "react";

const lista = useSelector((s) => s.paises);
const actividades = useSelector((s) => s.actividades);
const [filt,setFilt] = useState({actividad:"",continente:"",orden:""});
function barraFiltros(){
    let filtroF = lista;
    if(filt.actividad !== ""){
        let narr=[]
        let actividad = actividades.find((el) => el.nombre === filt.actividad);
        for (let i = 0; i < lista.length; i++) {
          for (let e = 0; e < actividad.paises.length; e++) {
            if (lista[i].nombre === actividad.paises[e].nombre) {
              narr.push(lista[i]);
            }
          }
        }
        filtroF=narr;
    }
    if(filt.continente ==="Africa"){
        filtroF.filter(e=>e.continente===filt.continente)
    }else if(filt.continente ==="Asia"){
        filtroF.filter(e=>e.continente===filt.continente)
    }else if(filt.continente ==="Europe"){
        filtroF.filter(e=>e.continente===filt.continente)
    }else if(filt.continente ==="Oceania"){
        filtroF.filter(e=>e.continente===filt.continente)
    }else if(filt.continente ==="South America"){
        filtroF.filter(e=>e.continente===filt.continente)
    }else if(filt.continente ==="North America"){
        filtroF.filter(e=>e.continente===filt.continente)
    }
}