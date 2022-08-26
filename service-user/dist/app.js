"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var http_errors_express_1 = __importDefault(require("http-errors-express"));
//Middlewares
var middlewares_1 = require("./middlewares");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
var app = (0, express_1.default)();
app.use(express_1.default.json());
//Routes
var User_1 = __importDefault(require("./routes/User"));
app.use('/api/user', User_1.default);
app.use(middlewares_1.notFound);
app.use((0, http_errors_express_1.default)({
    formatError: function (err, _req, _isExposed) {
        return {
            result: false,
            error: {
                name: err.message,
                status: err.code,
                message: err.data,
                stack: err.stack,
            }
        };
    },
}));
var PORT = process.env.PORT || 3000;
http_1.default.createServer(app).listen(PORT, function () {
    console.log("Server service-user is running on port 3000");
});
