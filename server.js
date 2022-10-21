const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '127.0.0.1'
const port = 3000
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { query } = parsedUrl
      await handle(req, res, parsedUrl, query)
      
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`) 
  })
})
.catch(() => {})