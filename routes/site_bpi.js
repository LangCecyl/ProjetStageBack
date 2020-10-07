const express = require('express');
const connection = require('../server/db.js');

const router = express.Router();

/* ----- GET all site_bpi ----- */

router.get('/',(req, res) =>{
    connection.query('SELECT * from site_bpi', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des sites');
      } else {
        res.status(200).json(results);
      }
    });
});

/* ----- GET site_bpi by ID ----- */

router.get('/:id', (req, res) => {
    const idSiteBPI = req.params.id;
    connection.query('SELECT * from site_bpi WHERE id = ?', [idSiteBPI], (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération d'un site`);
      } 
      if (results.length === 0) {
        return res.status(404).send('Erreur System');
      } else {
        res.json(results[0]);
      }
    });
});

/* ----- POST site_bpi ----- */

router.post('/add', (req, res) => {
    const formData = req.body;
    if ((formData.namesite == null || formData.namesite === '') || (formData.urlsite == null || formData.urlsite === '') || (formData.gestionsite == null || formData.gestionsite === '') || (formData.contactgestionsite == null || formData.contactgestionsite === '')) {
      res.status(400).send("Les données de site_bpi sont mal renseigné");
    } else {
      connection.query('INSERT INTO site_bpi SET ?', formData, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un site");
        } else {
          res.status(201).send({...formData});
        }
      });
    }
});

/* ----- PUT site_bpi by ID ----- */

router.put('/:id', (req, res) => {
    const idCategory = req.params.id;
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Les données sont mal renseigné");
    } else {
      connection.query('UPDATE sitebpi SET ? WHERE id=?' , [formData, idCategory], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un site");
        } else {
          res.status(200).send({...formData});
        }
      });
    }
});

/* ----- DELETE a sitecard ----- */

router.delete('/:id', (req, res) => {
    const idsitecards = req.params.id;
    connection.query('DELETE FROM sitecard WHERE id = ?', idsitecards, err => {
      if (err) {
        res.status(500).send(`Erreur lors de la suppression d'un site`);
      } else {
        res.status(204);
      }
    });
});

module.exports = router;