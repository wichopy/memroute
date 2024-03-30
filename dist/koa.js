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
exports.koaMiddleware = void 0;
const v8_1 = require("v8");
/**
 *
 * Its recommended that you should have at least 50% of the memory in your service or else you may suffer from an OOM kill.
 */
const koaMiddleware = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.url === '/memdump') {
        try {
            const heapStream = (0, v8_1.getHeapSnapshot)();
            ctx.response.set('content-type', 'application/json');
            ctx.response.type = 'json';
            ctx.body = heapStream;
            ctx.status = 200;
        }
        catch (err) {
            console.error(err);
            ctx.type = 'text/plain';
            ctx.body = 'Error making heap dump';
            ctx.status = 500;
        }
        // stop middleware from progressing further by not calling next
    }
    else {
        // ignore this middleware and continue with the rest
        yield next();
    }
});
exports.koaMiddleware = koaMiddleware;
