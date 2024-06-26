const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'desafio_node'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
  
  db.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Table `users` created or already exists.');

    const insertUserQuery = `
      INSERT INTO users (name) VALUES ('John Doe')
    `;
    
    db.query(insertUserQuery, (err, result) => {
      if (err) throw err;
      console.log('User `John Doe` inserted into `users` table.');
    });
  });
});

app.get('/', (req, res) => {
  const getUsersQuery = 'SELECT * FROM users';
  
  db.query(getUsersQuery, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
