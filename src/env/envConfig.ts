import dotenv from "dotenv";

dotenv.config();
export default class EnvironmentConfig {
  public static instance: EnvironmentConfig;
  public readonly app: AppConfig;
  public readonly database: DatabaseConfig;
  public readonly auth: Auth;

  private constructor() {
    const handleNumber = (val: string) => {
      let result;
      try {
        result = parseInt(val);
      } catch (e) {
        result = 0;
      }
      return result;
    };
    this.app = {
      port: handleNumber(process.env.APP_PORT as string),
      privateKey: process.env.APP_KEY as string,
    };
    this.database = {
      host: process.env.DB_HOST as string,
      port: handleNumber(process.env.DB_PORT as string),
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    };
    this.auth = {
      tokenKey: process.env.TOKEN_KEY as string,
    };
  }

  public static getInstance(): EnvironmentConfig {
    if (!EnvironmentConfig.instance) {
      EnvironmentConfig.instance = new EnvironmentConfig();
    }
    return EnvironmentConfig.instance;
  }
}

interface AppConfig {
  port: number;
  privateKey: string;
}

interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

interface Auth {
  tokenKey: string;
}


test