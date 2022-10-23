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

router.get("/", async (req, res) => {
  try {
    const actividades = await Actividades.findAll();
    let countact = await CountAct.findAll();
    let resp = [];

    for (let i = 0; i < actividades.length; i++) {
      let nObj = {
        id: actividades[i].id,
        nombre: actividades[i].nombre,
        dificultad: actividades[i].dificultad,
        duracion: actividades[i].duracion,
        temporada: actividades[i].temporada,
        paises: [],
      };
      for (let e = 0; e < countact.length; e++) {
        if (countact[e].dataValues.ActividadeId === actividades[i].id) {
          let paisesDB = await Countries.findByPk(
            countact[e].dataValues.CountryId
          );
          nObj.paises.push(paisesDB);
        }
      }
      resp.push(nObj);
    }
    res.status(200).send(resp);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;

  if (id) {
    await Actividades.destroy({ where: { id: id }, force: true });
  }
  const actividades = await Actividades.findAll();
  let countact = await CountAct.findAll();
  let resp = [];

  for (let i = 0; i < actividades.length; i++) {
    let nObj = {
      id: actividades[i].id,
      nombre: actividades[i].nombre,
      dificultad: actividades[i].dificultad,
      duracion: actividades[i].duracion,
      temporada: actividades[i].temporada,
      paises: [],
    };
    for (let e = 0; e < countact.length; e++) {
      if (countact[e].dataValues.ActividadeId === actividades[i].id) {
        let paisesDB = await Countries.findByPk(
          countact[e].dataValues.CountryId
        );
        nObj.paises.push(paisesDB);
      }
    }
    resp.push(nObj);
  }
  res.status(203).send(resp);
});

router.put("/", async (req, res) => {
  const { obj } = req.body;
  try {
    let ids = [];
    for (let i = 0; i < obj.paises.length; i++) {
      let pais = await Countries.findAll({ where: { nombre: obj.paises[i] } });
      ids.push(pais[0].dataValues.id);
    }
    console.log(ids);
    if (obj.id) {
      await Actividades.update(
        {
          nombre: obj.nombre,
          dificultad: obj.dificultad,
          duracion: obj.duracion,
          temporada: obj.temporada,
          paises: obj.paises,
        },
        {
          where: {
            id: obj.id,
          },
        }
      );
      await CountAct.destroy({
        where: {
          ActividadeId: obj.id,
        },
        force: true,
      });
      for (let i = 0; i < ids.length; i++) {
        await CountAct.create({
          ActividadeId: obj.id,
          CountryId: ids[i],
        });
      }
    }
    const actividades = await Actividades.findAll();
    let countact = await CountAct.findAll();
    let resp = [];

    for (let i = 0; i < actividades.length; i++) {
      let nObj = {
        id: actividades[i].id,
        nombre: actividades[i].nombre,
        dificultad: actividades[i].dificultad,
        duracion: actividades[i].duracion,
        temporada: actividades[i].temporada,
        paises: [],
      };
      for (let e = 0; e < countact.length; e++) {
        if (countact[e].dataValues.ActividadeId === actividades[i].id) {
          let paisesDB = await Countries.findByPk(
            countact[e].dataValues.CountryId
          );
          nObj.paises.push(paisesDB);
        }
      }
      resp.push(nObj);
    }
    res.status(200).send(resp);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
