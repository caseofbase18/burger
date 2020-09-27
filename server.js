const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();



var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
