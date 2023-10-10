"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpanseRoute = void 0;
const endpoints_json_1 = require("../../../../routes/endpoints.json");
const create_expanse_1 = require("../../controller/create_expanse/create_expanse");
const createExpanseRoute = (app) => {
    app.post(endpoints_json_1.EXPANSE.CREATE, create_expanse_1.createExpanseController);
};
exports.createExpanseRoute = createExpanseRoute;
