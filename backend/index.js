const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/', (req, res) => {
    db.select('*')
        .from('User')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

// GET: Fetch user by userId from the database
app.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    db.select('*')
        .from('User')
        .where('id', '=', userId)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/add-user', (req, res) => {
    const { username, password, email } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in the password DB.
            db('User')
                .insert({
                    username: username,
                    password: hash,
                    email: email
                })
                .then(() => {
                    console.log('User added');
                    return res.json({ msg: 'User added' });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json({ error: 'Internal server error' });
                });
        });
    });
});

  
//   // Verify Token middleware
//   function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if (typeof bearerHeader !== 'undefined') {
//       // Split at the space
//       const bearer = bearerHeader.split(' ');
//       // Get token from array
//       const bearerToken = bearer[1];
//       // Set the token
//       req.token = bearerToken;
//       // Verify token
//       jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
//         if (err) {
//           res.sendStatus(403);
//         } else {
//           // Add authData to the request object
//           req.authData = authData;
//           // Call next middleware function
//           next();
//         }
//       });
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
//   }

// DELETE: Delete all users from the database
app.delete('/delete-users', (req, res) => {
    db.select('*')
        .from('User')
        .del()
        .then(() => {
            console.log('all users deleted');
            return res.json({ msg: 'all users deleted' });
        })
        .catch((err) => {
            console.log(err);
        });
});
//Hacer funcion pa token refersh y authentication token para user y login


// POST: Login user and return JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db('User')
      .select('*')
      .where('username', '=', username)
      .then(([user]) => {
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return res.status(401).json({ error: 'Invalid username or password' });
          }
          const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
          return res.json({ token });
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
      });
  });

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));