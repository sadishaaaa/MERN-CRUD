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
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllTask = async (req: Request, res: Response) => {
  try {
    let result = await taskModel.find({});
    res.json({
      success: true,
      message: " all task displayed sucessfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const getTaskById = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    let result = await taskModel.findById(id);
    res.json({
      success: true,
      message: "  task displayed sucessfully acc to id",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTaskById = async (req: Request, res: Response) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let result = await taskModel.findByIdAndUpdate(id, data, { new: true });
    res.json({
      success: true,
      message: "Teacher patch sucessfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteTaskByID = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    let result = await taskModel.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "deleted sucessfully",
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
