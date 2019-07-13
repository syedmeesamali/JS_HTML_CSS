var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "meesam",
    password: "admin",
    database: "mydb"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Altered successfully.");
  })
})

