"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User_1 = __importDefault(require("../../core/system/User"));
var router = express_1.default.Router();
router.post('/authorization', function (req, res, next) {
    User_1.default.authorization(req.body || {}, req.headers || {})
        .then(function (data) { return res.status(200).json({ message: "Success", data: data }); })
        .catch(function (err) { return next(err); });
});
exports.default = router;
