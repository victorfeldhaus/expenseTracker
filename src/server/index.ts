import { log } from "console";
import express from "express";
import EnvionmentConfig from "../env/envConfig";
import { middleware } from "../middlewares";
export const server = () => {
  const app = express();

  middleware(app);

  app.listen(EnvionmentConfig.instance.app.port, () =>
    log(`Listening port: ${EnvionmentConfig.instance.app.port}`)
  );
};
