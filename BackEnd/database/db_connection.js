const mySQL = require('mysql2')

const q = mySQL.createConnection({
    host: 'localhost',
    database: 'freshfood',
    user: 'root',
    password: ''
})

module.exports = q