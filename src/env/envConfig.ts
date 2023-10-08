export default class EnvionmentConfig {
  public static instance: EnvionmentConfig = new EnvionmentConfig();
  public readonly app: AppConfig;

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
  }
}

interface AppConfig {
  port: number;
  privateKey: string;
}
