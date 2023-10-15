import { DataAccessObject } from "mysql-all-in-one";
import EnvironmentConfig from "../env/envConfig";

export const dao = new DataAccessObject({
  host: EnvironmentConfig.getInstance().database.host,
  user: EnvironmentConfig.getInstance().database.user,
  port: EnvironmentConfig.getInstance().database.port,
  password: EnvironmentConfig.getInstance().database.password,
  database: EnvironmentConfig.getInstance().database.database,
});
