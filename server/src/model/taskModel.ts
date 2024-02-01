import { model } from "mongoose";
import { taskSchema } from "../schema/schema";
import { ITask } from "../interface/task";

export const taskModel = model<ITask>("Task", taskSchema);
