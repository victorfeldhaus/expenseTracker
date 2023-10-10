"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class EnvionmentConfig {
    constructor() {
        const handleNumber = (val) => {
            let result;
            try {
                result = parseInt(val);
            }
            catch (e) {
                result = 0;
            }
            return result;
        };
        this.app = {
            port: handleNumber(process.env.APP_PORT),
            privateKey: process.env.APP_KEY,
        };
        this.database = {
            host: process.env.DB_HOST,
            port: handleNumber(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        };
    }
    static getInstance() {
        if (!EnvionmentConfig.instance) {
            EnvionmentConfig.instance = new EnvionmentConfig();
        }
        return EnvionmentConfig.instance;
    }
}
exports.default = EnvionmentConfig;
