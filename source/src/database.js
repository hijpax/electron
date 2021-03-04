const mysql = require('promise-mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	port: '8080',
	user: 'root',
	password: 'electron123',
	database: 'electron'
})

function getConnection(){
	return connection
}

module.exports = { getConnection }