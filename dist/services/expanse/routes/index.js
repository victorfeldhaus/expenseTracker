"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expanseRoutes = void 0;
const POST_1 = require("./create_expanse/POST");
const expanseRoutes = (app) => {
    (0, POST_1.createExpanseRoute)(app);
};
exports.expanseRoutes = expanseRoutes;
