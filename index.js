const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('Hello World!')
})

server.listen(8000, () => {
    console.log('Server Running at port 3000')
})
