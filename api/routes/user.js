const express = require('express');
const pool = require('./connection');

const router = express.Router();


router.get('/', (req, res, next) => {
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM users', (err, result) => {
      done();
      if (err) {
        throw err;
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
    client.query('SELECT * FROM users WHERE id_user = $1', [userId], (err, result) => {
      done();
      if (err) {
        throw err;
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
      throw err;
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
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        status: 200,
        data: [req.body]
      });
    }
  );
});
router.delete('/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  pool.query('DELETE FROM users WHERE id_user = $1', [userId], (err, results) => {
    if (err) {
      throw err;
    }

    res.status(200).json({
      status: 200,
      data: `User deleted with ID: ${userId}`
    });
  });
});
module.exports = router;
