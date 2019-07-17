var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "INSERT INTO customers (name, address) VALUES ('CCL Company', 'Detroit Street')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted .." + result.insertId);
  })
})

