import { log } from "console";
import express from "express";
import EnvironmentConfig from "../env/envConfig";
import { middleware } from "../middlewares";
import { routes } from "../routes";
export const server = () => {
  const app = express();

  middleware(app);

  routes(app);

  app.listen(EnvironmentConfig.getInstance().app.port, () =>
    log(`Listening port: ${EnvironmentConfig.getInstance().app.port}`)
  );
};
