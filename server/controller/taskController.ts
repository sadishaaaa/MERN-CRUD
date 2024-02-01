import { Request, Response } from "express";
import { taskModel } from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
  let data = req.body;

  try {
    let result = await taskModel.create(data);
    res.json({
      success: true,
      message: "Task added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
