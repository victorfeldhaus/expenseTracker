"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const envConfig_1 = __importDefault(require("../env/envConfig"));
const middlewares_1 = require("../middlewares");
const routes_1 = require("../routes");
const server = () => {
    const app = (0, express_1.default)();
    (0, middlewares_1.middleware)(app);
    (0, routes_1.routes)(app);
    app.listen(envConfig_1.default.getInstance().app.port, () => (0, console_1.log)(`Listening port: ${envConfig_1.default.getInstance().app.port}`));
};
exports.server = server;
