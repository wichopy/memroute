"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressMiddleware = void 0;
const v8_1 = __importDefault(require("v8"));
function expressMiddleware(req, res, next) {
    const snapshot = v8_1.default.getHeapSnapshot();
    if (req.path === '/memdump') {
        res.write(snapshot, () => {
            res.end();
        });
    }
    else {
        next();
    }
}
exports.expressMiddleware = expressMiddleware;
