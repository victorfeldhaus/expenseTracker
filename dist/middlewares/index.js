"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const body_parse_1 = require("./body_parse");
const middleware = (app) => {
    (0, body_parse_1.bodyParser)(app);
};
exports.middleware = middleware;
