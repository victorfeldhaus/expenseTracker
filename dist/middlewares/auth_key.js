"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authKey = void 0;
const envConfig_1 = __importDefault(require("../env/envConfig"));
const authKey = (app) => {
    app.use((req, res, next) => {
        const authKey = req.headers["auth"];
        if (authKey === envConfig_1.default.getInstance().app.privateKey) {
            next();
        }
        else {
            res.status(401).json({ message: "UNAUTORIZED" });
        }
    });
};
exports.authKey = authKey;
