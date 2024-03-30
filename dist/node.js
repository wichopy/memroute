"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const v8_1 = __importDefault(require("v8"));
http_1.default.createServer((req, res) => {
});
function node(req, res) {
    if (!req.url) {
        console.error('no url was passed');
        return;
    }
    const path = new URL(req.url).pathname;
    if (req.method === 'GET' && path === 'memdump') {
        const snapshot = v8_1.default.getHeapSnapshot();
    }
}
