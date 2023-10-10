"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_expanse = void 0;
const create_expanse_1 = require("../model/create_expanse");
const userExists_1 = require("../utils/userExists");
const create_expanse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, amount, date, categoryId, userId } = req.body;
    if (typeof name !== "string" ||
        amount !== "number" ||
        date !== "string" ||
        categoryId !== "string" ||
        !(0, userExists_1.userExists)(userId))
        return res.status(400).json({ message: "Invalid body" });
    const expanse = yield (0, create_expanse_1.createExpanse)(name, amount, date, categoryId, userId);
    if (!expanse)
        return res.status(500).json({ message: "Internal error" });
    return res.status(201).json({ message: "Expanse created" });
});
exports.create_expanse = create_expanse;
