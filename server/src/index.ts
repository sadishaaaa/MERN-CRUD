import express, { Request, Response, NextFunction, json } from "express";
import taskRouter from "./route/taskRoute";
import connectdb from "../src/connectdb";
import config from "./config";
const expressApp = express();

expressApp.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("Request received");
  next();
});

expressApp.use(json());
expressApp.use("/task", taskRouter);

expressApp.listen(config.serverPort, async () => {
  try {
    await connectdb();
    console.log(
      `Application is connected on port ${config.serverPort} successfully`
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
