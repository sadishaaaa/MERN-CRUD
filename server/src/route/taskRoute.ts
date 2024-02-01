import { Router, Request, Response } from "express";
import {
  createTask,
  deleteTaskByID,
  getAllTask,
  getTaskById,
  updateTaskById,
} from "../controller/taskController";

let taskRouter = Router();

taskRouter.route("/").post(createTask).get(getAllTask);
taskRouter
  .route("/:id")
  .get(getTaskById)
  .patch(updateTaskById)
  .delete(deleteTaskByID);

export default taskRouter;
