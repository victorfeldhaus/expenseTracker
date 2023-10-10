"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dao = void 0;
const mysql_all_in_one_1 = require("mysql-all-in-one");
const envConfig_1 = __importDefault(require("../env/envConfig"));
exports.dao = new mysql_all_in_one_1.DataAccessObject({
    host: envConfig_1.default.getInstance().database.host,
    user: envConfig_1.default.getInstance().database.user,
    port: envConfig_1.default.getInstance().database.port,
    password: envConfig_1.default.getInstance().database.password,
    database: envConfig_1.default.getInstance().database.database,
});
