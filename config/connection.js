const connection = require("mysql")({
    host: "localhost",

    // Your port
    port: 8889,

    // Your username
    user: "root",

    // Your password and db
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
module.exports = connection;