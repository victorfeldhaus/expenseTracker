import { log } from "console";
import express from "express";
import EnvironmentConfig from "../env/envConfig";
import { middleware } from "../middlewares";
import { routes } from "../routes";
import { loginRoute } from "../services/auth/routes/login/POST";
import { authRoutes } from "../services/auth/routes";
import { bodyParser } from "../middlewares/body_parse";
export const server = () => {
  const app = express();
  bodyParser(app);
  authRoutes(app);

  middleware(app);

  routes(app);

  app.listen(EnvironmentConfig.getInstance().app.port, () =>
    log(`Listening port: ${EnvironmentConfig.getInstance().app.port}`)
  );
};
