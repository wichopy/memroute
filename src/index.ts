import { koaMiddleware } from './koa'
import { expressMiddleware } from './express'
export function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 5)); //output: 8

export default {
  koa: koaMiddleware,
  express: expressMiddleware,
  node: {},
}