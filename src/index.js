import {  initConfig} from "./configs/config.js";

import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

import routes from "./routes/routes.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config({ path: "./.env" });

function main() {
  initConfig();
  routes(app);
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();