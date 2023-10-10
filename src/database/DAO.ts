import { DataAccessObject } from "mysql-all-in-one";
import EnvionmentConfig from "../env/envConfig";

export const dao = new DataAccessObject({
  host: EnvionmentConfig.getInstance().database.host,
  user: EnvionmentConfig.getInstance().database.user,
  port: EnvionmentConfig.getInstance().database.port,
  password: EnvionmentConfig.getInstance().database.password,
  database: EnvionmentConfig.getInstance().database.database,
});
