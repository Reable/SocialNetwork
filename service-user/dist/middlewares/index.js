"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
function notFound(req, res, next) {
    res.status(404);
    var err = new Error('Not Found ' + req.url);
    next(err);
}
exports.notFound = notFound;
