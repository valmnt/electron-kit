const sql = require('mysql')

var connection = sql.createConnection({
    host: 'localhost',
    user: 'valmnt',
    password: 'valmnt',
    database: 'valmnt'
})

connection.connect(function (err) {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
    else {
        console.log('DATABASE ACCESS')
    }
})