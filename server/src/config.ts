import { config } from "dotenv";

const pathToEnv = __dirname + "/../.env";

config({ path: pathToEnv });

const serverConfig = {
  serverPort: Number(process.env.SERVER_PORT) || 5000,

  database: {
    charset: "utf8",
    url: process.env.DB_URL || "mongodb://0.0.0.0:27017",
    port: Number(process.env.DB_PORT),
    timezone: "UTC",
  },
};

export default serverConfig;
