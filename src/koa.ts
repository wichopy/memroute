import { getHeapSnapshot } from 'v8'
import type { Context, Next } from 'koa'

/**
 *
 * Its recommended that you should have at least 50% of the memory in your service or else you may suffer from an OOM kill.
 */
export const koaMiddleware = async (ctx: Context, next: Next) => {
    if (ctx.url === '/memdump') {
      try {
        const heapStream = getHeapSnapshot()
        ctx.response.set('content-type', 'application/json')
        ctx.response.type = 'json'
        ctx.body = heapStream
        ctx.status = 200
      } catch (err) {
        console.error(err)
        ctx.type = 'text/plain'
        ctx.body = 'Error making heap dump'
        ctx.status = 500
      }
      // stop middleware from progressing further by not calling next
    } else {
      // ignore this middleware and continue with the rest
      await next()
    }
  }