import { DataAccessObject } from "mysql-all-in-one";
import EnvionmentConfig from "../env/envConfig";

export const dao = new DataAccessObject({
  host: EnvionmentConfig.instance.database.host,
  user: EnvionmentConfig.instance.database.user,
  port: EnvionmentConfig.instance.database.port,
  password: EnvionmentConfig.instance.database.password,
  database: EnvionmentConfig.instance.database.database,
});
