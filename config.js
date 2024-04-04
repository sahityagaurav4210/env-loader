const fs = require("fs");
const $ENV = {};

function LoadENV(envPath = [".env"]) {
  let envFile = "";

  for (let index = 0; index < envPath.length; index++) {
    if (fs.existsSync(envPath[index])) {
      envFile = envPath[index];
      break;
    }
  }

  if (!envFile) throw new Error("No env file found!!!");

  require("dotenv").configDotenv({ path: envFile, processEnv: $ENV });

  return $ENV;
}

module.exports = LoadENV;
