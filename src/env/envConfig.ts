export default class EnvionmentConfig {
  public static instance: EnvionmentConfig = new EnvionmentConfig();
  public readonly app: AppConfig;
  public readonly database: DatabaseConfig;

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
      database: process.env.DB_DATABASE as string,
    };
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
