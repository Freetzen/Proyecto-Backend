import 'dotenv/config'
import express from 'express'
import socket from 'socket.io'
import { getManagerMessage } from './dao/daoManager'

const app = express()
const PORT = 8080;
const managerMessage = new getManagerMessage()

const server = app.listen(PORT, () => { 
    console.log(`Server on port localhost:${PORT}`)
});

app.use(express.json()); //Permite trabajar con JSON
app.use(express.urlencoded({extended:true})); //Permite trabajar con url extendidos

