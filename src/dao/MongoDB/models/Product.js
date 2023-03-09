import { ManagerMongoDB } from "../../../db/gestorMongoDB.js";
import {Schema} from "mongoose";

const url = ''

const productSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    stock: Number,
    description: String
})

export class ManagerProductMongoDB extends ManagerMongoDB {
    super(url, product, productSchema)
}