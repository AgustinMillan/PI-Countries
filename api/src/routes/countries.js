const { Router } = require("express");
const { Actividades, Countries, CountAct } = require("../db");
const axios = require("axios");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const obj = await Countries.findByPk(id)
        const actividadesDB = await CountAct.findAll();
        let newObj = {
            id: id,
            nombre: obj.nombre,
            imgB: obj.imgB,
            continente: obj.continente,
            capital: obj.capital,
            area: obj.area,
            poblacion: obj.poblacion,
            actividades: [],
        }
        for (let i = 0; i < actividadesDB.length; i++) {
            if (actividadesDB[i].dataValues.CountryId===id){
              const infoActividad = await Actividades.findByPk(actividadesDB[i].dataValues.ActividadeId)
              newObj.actividades.push({id:actividadesDB[i].dataValues.ActividadeId , 
              nombre:infoActividad})}
        }
        return res.status(200).send(newObj)
    } catch (error) {
        res.status(404).send(error)
    }
})
router.get("/", async (req, res) => {
  try {
    const {name} = req.query

    if(name){
        let tabla = await Countries.findAll();
        const str = [];
        const result = [];
        tabla.map(e=>{
            if(typeof e.nombre === 'string' || e.nombre instanceof String)str.push(e)
        })
        str.map(e=> {
            if(e.nombre.toLowerCase().includes(name.toLowerCase())) result.push(e)
        })
        if(result.length)return res.status(200).json(result);
        return res.status(404).json({message:`Lo sentimos. ${name} no existe`})
    }else{
        const tabla = await Countries.findAll();
        if (!tabla.length) {
            let data;
            await axios
              .get(`https://restcountries.com/v3/all`)
              .then((result) => (data = result.data));
    
          for (let i = 0; i < data.length; i++) {
            if(Array.isArray(data[i].capital))
            await Countries.create({
              id: data[i].cca3,
              nombre: data[i].translations.spa.common,
              imgB: data[i].flags[1],
              continente: data[i].continents[0],
              capital: data[i].capital[0],
              area: data[i].area,
              poblacion: data[i].population,
            });
          }
          const tablaf = await Countries.findAll();
        return res.status(200).send(tablaf);
        } else {
          return res.status(200).json(tabla);
        }
    }

  } catch (e) {
    res.json({
      message: "Ocurrio un error al obtener la informacion :(",
      error: e,
    });
  }
});

module.exports = router;
