const fs = require("fs");

class EnvironmentVariables {
  static #$ENV;

  /**
   * @param {Array} envPath - List of env file path from which you want to load the environment variables.
   * @description - This function loads all the environment variables from the first found file. For example, if a second file is present in the project root directory, it will load all the environment variables from that file.
   * @returns {void}
   */
  static LoadENV(envPath = [".env"]) {
    let envFile = "";

    for (let index = 0; index < envPath.length; index++) {
      if (fs.existsSync(envPath[index])) {
        envFile = envPath[index];
        break;
      }
    }

    if (!envFile) throw new Error("No env file found!!!");

    require("dotenv").configDotenv({ path: envFile });
  }

  /**
   * @param {Array} envPath - List of env file path from which you want to load the environment variables.
   * @description - This function loads all the environment variables from the first found file and store it in a variable called ENV. For example, if a second file is present in the project root directory, it will load all the environment variables from that file.
   * @returns {void}
   */
  static LoadENVIntoVariable(envPath = [".env"]) {
    let envFile = "";

    for (let index = 0; index < envPath.length; index++) {
      if (fs.existsSync(envPath[index])) {
        envFile = envPath[index];
        break;
      }
    }

    if (!envFile) throw new Error("No env file found!!!");

    require("dotenv").configDotenv({ path: envFile, processEnv: this.#$ENV });
  }

  /**
   * @param {Array} envPath - List of env file path from which you want to load the environment variables.
   * @description - This function loads all the environment variables from the first found file and store it into custom variable provided as a 2nd argument. For example, if a second file is present in the project root directory, it will load all the environment variables from that file.
   * @returns {void}
   */
  static LoadENVIntoCustomVariable(envPath = [".env"], envVariable = {}) {
    let envFile = "";

    for (let index = 0; index < envPath.length; index++) {
      if (fs.existsSync(envPath[index])) {
        envFile = envPath[index];
        break;
      }
    }

    if (!envFile) throw new Error("No env file found!!!");

    require("dotenv").configDotenv({ path: envFile, processEnv: envVariable });
  }

  /**
   * @param {Array} envPath - List of env file path from which you want to load the environment variables.
   * @description - This function loads all the environment variables from the first found file and store it into node's global variable called $ENV. For example, if a second file is present in the project root directory, it will load all the environment variables from that file.
   * @returns {void}
   */
  static LoadENVIntoGlobals(envPath = [".env"]) {
    let envFile = "";

    for (let index = 0; index < envPath.length; index++) {
      if (fs.existsSync(envPath[index])) {
        envFile = envPath[index];
        break;
      }
    }

    if (!envFile) throw new Error("No env file found!!!");

    require("dotenv").configDotenv({ path: envFile, processEnv: this.#$ENV });
    globalThis.$ENV = this.#$ENV;
    this.#$ENV = {};
  }

  /**
   * @description - Loaded environment variables.
   * @returns {#$ENV}
   */
  static get ENVs() {
    return this.#$ENV;
  }
}

module.exports = EnvironmentVariables;
