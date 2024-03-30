import v8 from 'v8'
import type { NextFunction, Request, Response } from 'express'

export function expressMiddleware(req: Request, res: Response, next: NextFunction) {
  const snapshot = v8.getHeapSnapshot()

  if (req.path === '/memdump') {
    res.write(snapshot, () => {
      res.end()
    })
  } else {
    next()
  }
}