const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();

app.use(
  bodyParser.json({
    extended: true,
  })
);
app.use(cors());
mongoose.connect("mongodb://localhost:27017/algowizDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./routes")(app);

app.listen(config.port);
