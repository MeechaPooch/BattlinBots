const port = 4000

//misc
import fetch from 'node-fetch'

// setup api
import express from 'express'
const app = express()
app.use(express.static('../game'))

// http server
import http from 'http'
const server = http.createServer(app)

// setup socketio
import {Server} from 'socket.io'
const io = new Server(server)


 

// listen
server.listen(port, //)
    async (err)=>{console.log(`server hosted on ${(await (await fetch('https://ipinfo.io',{headers:{accept:'application/json'}}).catch(e=>({json:()=>({ip:'localhost'})}))).json()).ip}:${port}`)})