import http from 'http'
import app from './app.js';

const port = process.env.PORT;

const server = http.createServer(app)

server.listen(port || 8000 , () => {
    console.log(`your app is listing on port ${port || 8000}`)
})