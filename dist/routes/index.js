"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_1 = require("../services/expanse/routes");
const routes = (app) => {
    (0, routes_1.expanseRoutes)(app);
};
exports.routes = routes;
