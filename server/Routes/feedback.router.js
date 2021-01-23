const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET - get feedback forms from DB
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback" ORDER BY "date" ASC;`;
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting feedback table', error);
            res.sendStatus(500);
        });
});

// POST - add completed feedback to DB
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log(`New Feedback:`, newFeedback);

    let queryText = `
                        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);
                    `
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
});

// DELETE - remove from database
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('deleteing id:', id);
    
    let queryText = `DELETE FROM "feedback" WHERE id=$1;`;
    pool.query(queryText, [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in DELETE:', error);
            res.sendStatus(500);
        })
});

module.exports = router;