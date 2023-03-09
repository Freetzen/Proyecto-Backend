import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import {Schema} from "mongoose";

const url = process.env.URLMONGODB

const messageSchema = new Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    message: String
})

export class ManagerMessageMongoDB extends ManagerMongoDB {
    constructor(){
        super(url, 'messages', messageSchema) 
        //Aqui van los atributos propios de la clase
    }
    //Aqui van los métodos propios de la clase
}