const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(require("./routes/index"));

const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server on port" + port);
