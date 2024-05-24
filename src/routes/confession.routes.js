import { Router } from "express";

import {getConfessions} from "../controllers/confession.controller.js";

const confessionRoutes = Router();

confessionRoutes.get("/getConfessions", getConfessions);

export {confessionRoutes};

