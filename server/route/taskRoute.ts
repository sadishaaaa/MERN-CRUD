import { Router, Request, Response } from "express";
import { createTask } from "../controller/taskController";

let taskRouter = Router();

taskRouter.route("/").post(createTask);

export default taskRouter;
