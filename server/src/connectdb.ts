import mongoose from "mongoose";
import config from "./config";
let dbUrl = "mongodb://0.0.0.0:27017";

let connectdb = async () => {
  try {
    await mongoose.connect(config.database.url);
    console.log(
      `application is connected to mongodb at port ${dbUrl} successfully.`
    );
  } catch (error: any) {
    console.log(error.message);
  }
};
export default connectdb;
