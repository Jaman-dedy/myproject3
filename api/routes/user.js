const express = require('express');
const pg = require('pg');

const router = express.Router();

const config = {
  user: 'jaman',
  database: 'questioner',
  password: '123',
  port: 5432
};
const pool = new pg.Pool(config);

router.get('/', (req, res, next) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB${err}`);
    }
    client.query('SELECT * FROM users', (err, result) => {
      done();
      if (err) {
        console.log(err);
        res.status(400).json({
          status: 400,
          error: err
        });
      }
      res.status(200).json({
        status: 200,
        data: result.rows
      });
    });
  });
});

router.get('/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB${err}`);
    }
    client.query('SELECT * FROM users WHERE id_user = $1', [userId], (err, result) => {
      done();
      if (err) {
        console.log(err);
        res.status(400).json({
          status: 400,
          error: err
        });
      }
      res.status(200).json({
        status: 200,
        data: result.rows
      });
    });
  });
});

router.post('/', (req, res, next) => {
  const {
    firstname, lastname, othername, email, phonenumber, username, registered, isadmin
  } = req.body;

  pool.query('INSERT INTO users (firstname, lastname, othername, email, phonenumber, username, registered, isadmin) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [firstname, lastname, othername, email, phonenumber, username, registered, isadmin], (err, results) => {
    if (err) {
      res.status(400).json({
        status: 400,
        error: err
      });
    } else {
      res.status(201).json({
        status: 201,
        data: [req.body]
      });
    }
  });
});

router.patch('/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  const { firstname, lastname, othername } = req.body;

  pool.query(
    'UPDATE users SET firstname = $1, lastname = $2, othername = $3 WHERE id_user = $4',
    [firstname, lastname, othername, userId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${userId}`);
    }
  );
});
router.delete('/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  pool.query('DELETE FROM users WHERE id_user = $1', [userId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${userId}`);
  });
});
module.exports = router;
