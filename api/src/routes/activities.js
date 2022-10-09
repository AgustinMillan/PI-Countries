const { Router } = require("express");
const { Actividades, Countries, CountAct } = require("../db");
const axios = require("axios");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", async(req,res)=>{
    const {nombre, dificultad, duracion, temporada, paises} = req.body;
    Actividades.create({
        nombre,
        dificultad,
        duracion,
        temporada
    })
    for (let i = 0; i < paises.length; i++) {
        let matchP = await Countries.findAll({where: {nombre:paises[i]}});
        Actividades.addCountries(matchP)
    }
})

module.exports = router;