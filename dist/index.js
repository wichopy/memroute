"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const koa_1 = require("./koa");
function add(a, b) {
    return a + b;
}
exports.add = add;
console.log(add(3, 5)); //output: 8
exports.default = {
    koa: koa_1.koaMiddleware,
    express: {},
    node: {},
};
