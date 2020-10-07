const express = require('express');
const connection = require('../server/db.js');

const router = express.Router();

/* ----- GET all cookie ----- */

router.get('/',(req, res) =>{
    connection.query('SELECT * from cookie_bpi', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des cookies');
      } else {
        res.status(200).json(results);
      }
    });
});

/* ----- GET cookie by ID ----- */

router.get('/:id', (req, res) => {
    const idCookie = req.params.id;
    connection.query('SELECT * from actu WHERE id = ?', [idCookie], (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération du cookie`);
      } 
      if (results.length === 0) {
        return res.status(404).send('cookie non trouvée');
      } else {
        res.json(results[0]);
      }
    });
});

/* ----- POST cookie ----- */

router.post('/add', (req, res) => {
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Le text de le cookie est mal renseigné");
    } else {
      connection.query('INSERT INTO cookie_bpi SET ?', formData, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde");
        } else {
          res.status(201).send({...formData});
        }
      });
    }
});

/* ----- PUT cookie by ID ----- */

router.put('/:id', (req, res) => {
    const idCategory = req.params.id;
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Les données sont mal renseigné");
    } else {
      connection.query('UPDATE cookie_bpi SET ? WHERE id=?' , [formData, idCategory], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'une catégorie");
        } else {
          res.status(200).send({...formData});
        }
      });
    }
});

/* ----- DELETE a actu ----- */

router.delete('/:id', (req, res) => {
    const idCookie = req.params.id;
    connection.query('DELETE FROM cookie_bpi WHERE id = ?', idCookie, err => {
      if (err) {
        res.status(500).send(`Erreur lors de la suppression d'un cookie`);
      } else {
        res.status(204);
      }
    });
});

module.exports = router;