"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_controller_1 = __importDefault(require("../controller/app.controller"));
const router = express_1.Router();
router.get("/", app_controller_1.default.healthCheck);
exports.default = router;
//# sourceMappingURL=index.js.map