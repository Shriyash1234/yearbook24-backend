import { Router } from "express";

import {getStudentDetails} from "../controllers/student.controller.js";

const studentRoutes = Router();

studentRoutes.get("/studentDetails", getStudentDetails);

export {studentRoutes};