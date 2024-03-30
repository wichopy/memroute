import http from 'http'
import v8 from 'v8'

http.createServer((req, res) => {

})
function node(req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage> & {
  req: http.IncomingMessage;
}) {
  if (!req.url) {
    console.error('no url was passed')
    return
  }
  const path = new URL(req.url).pathname
  if (req.method === 'GET' && path === 'memdump') {
    const snapshot = v8.getHeapSnapshot()
    
  }
}