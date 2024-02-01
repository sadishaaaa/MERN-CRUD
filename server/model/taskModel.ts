import { model } from "mongoose";
import { taskSchema } from "../schema/schema";

export const taskModel = model<ITask>("Task", taskSchema);
