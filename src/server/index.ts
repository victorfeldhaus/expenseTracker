import { log } from "console";
import express from "express";
import EnvionmentConfig from "../env/envConfig";
import { middleware } from "../middlewares";
import { routes } from "../routes";
export const server = () => {
  const app = express();

  middleware(app);

  routes(app);

  app.listen(EnvionmentConfig.getInstance().app.port, () =>
    log(`Listening port: ${EnvionmentConfig.getInstance().app.port}`)
  );
};
