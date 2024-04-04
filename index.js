const express = require("express");

const LoadENV = require("./config");

const app = express();
const $ENV = LoadENV([".env.development", ".env"]);

const PORT = $ENV.PORT || 8000;
const HOST = $ENV.HOST || "0.0.0.0";

app.get("/", function (req, res) {
  return res.status(200).json({
    msg: "Hello world",
  });
});

app.listen(PORT, HOST, () => console.log(`Server started on port ${PORT}.`));
