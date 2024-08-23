import { startDB } from "./mongodb";

class Loaders {
  start() {
    startDB();
  }
}

module.exports = new Loaders();
