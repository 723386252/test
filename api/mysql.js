const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'swj123',
    database:'express-mysql'
})
connection.connect()
module.exports = connection