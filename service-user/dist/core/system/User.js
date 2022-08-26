"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../controllers/User"));
var UserStorage_1 = __importDefault(require("../storage/UserStorage"));
exports.default = new User_1.default(UserStorage_1.default);
