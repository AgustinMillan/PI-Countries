const { Router } = require("express");
const { Actividades, Countries, CountAct } = require("../db");
const axios = require("axios");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", async (req, res) => {
  try {
    const { nombre, dificultad, duracion, temporada, paises } = req.body;
    const act = await Actividades.create({
      nombre,
      dificultad,
      duracion,
      temporada,
    });

    const paisesDB = await Countries.findAll();

    for (let e = 0; e < paisesDB.length; e++) {
      for (let i = 0; i < paises.length; i++) {
        if (paisesDB[e].nombre.toLowerCase().includes(paises[i].toLowerCase()))
          await act.addCountries(paisesDB[e]);
      }
    }
    res.status(201).json([act, paises]);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async(req,res)=>{
    try {
        const actividades = await Actividades.findAll();
        res.status(200).send(actividades)
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = router;
