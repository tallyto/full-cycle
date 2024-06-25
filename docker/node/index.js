const express = require('express')
const mysql = require('mysql')

const config =  {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Tállyto')`
connection.query(sql)
connection.end()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})