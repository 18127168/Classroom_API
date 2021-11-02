const mysql = require("mysql");

const db = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6448295",
    password: "FBlgECztix",
    database: "sql6448295",
    port: "3306"
})

module.exports = db;