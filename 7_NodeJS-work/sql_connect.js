var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "meesam",
    password: "admin"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected")
});

