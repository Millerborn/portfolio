const express = require('express');
const pool = require('../modules/pool');
// const axios = require('axios');

const router = express.Router();

// return all projects
router.get('/', (req, res) => {
    // const queryText = 'SELECT id, name, description, thumbnail, website, github, date_completed, tag_id FROM projects;';
    const queryText = 'SELECT projects.*, tags.name as tag FROM projects JOIN tags ON projects.tag_id = tags.id';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
      });
  });

router.post('/', (req, res) => {
    console.log('post info: ', req.body);
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
      });
  });

// // put request route to send new projects information to database
// router.put('/', (req, res) => {

//     const updatedProject = req.body;
  
//     const queryText = `UPDATE projects
//     SET "name" = $1, 
//     "description" = $2, 
//     "thumbnail" = $3, 
//     "website" = $4, 
//     "github" = $5, 
//     "date_completed" = $6, 
//     "tag_id" = $7`;
  
//     const queryValues = [
//       updatedProject.name,
//       updatedProject.description,
//       updatedProject.thumbnail,
//       updatedProject.website,
//       updatedProject.github,
//       updatedProject.date_completed,
//       updatedProject.tag_id,
//     ];
  
//     pool.query(queryText, queryValues)
//       .then(() => { res.sendStatus(200); })
//       .catch((error) => {
//         console.log('Error completing SELECT projects query', error);
//         res.sendStatus(500);
//       });
//   });

// delete a project
router.delete('/:id', (req, res) => {
  const prjId = req.params.id;
  console.log('Delete request', prjId);
  const sqlText = 'DELETE FROM projects WHERE id=$1;';
  pool.query(sqlText, [prjId])
    .then((result) => {
      console.log('Project was deleted', result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`DELETE error ${sqlText}`, error);
      res.sendStatus(500);
    })
})

module.exports = router;
