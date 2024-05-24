import { Router } from "express";

import {getMessages} from "../controllers/message.controller.js";

const messageRoutes = Router();

messageRoutes.get("/getMessages", getMessages);

export {messageRoutes};