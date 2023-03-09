import mongoose from "mongoose";



export class ManagerMongoDB{
    #url
    constructor(url, collection, schema){
    this.#url = url, //Conexion con mongodb Atlas. Atributo privado
    this.collection = collection, //Coleccion con la que trabajaré
    this.schema = new mongoose.Schema(schema), //Que atributos contiene esta colección
    this.model = mongoose.model(this.collection, this.schema)
    }

    async #setConection(){
        try {
            await mongoose.connect(this.#url)
        } catch (error) {
            return error
        }
    }

    async addElements(elements){ //Agregar 1 o varios elementos
        this.#setConection()
        try {
            return await this.model.insertMany(elements)
        } catch (error) {
            return error
        }
    }

    async getElements(){
        this.#setConection()
        try {
            return await this.model.find()
        } catch (error) {
            return error
        }
    }

    async getElementsById(id){
        this.#setConection()
        try {
            return await this.model.findById(id)
        } catch (error) {
            return error
        }
    }

    async updateElements(id, info){
        this.#setConection()
        try {
            return await this.model.findByIdAndUpdate(id, info)
        } catch (error) {
            return error
        }
    }

    async deleteElements(id){
        this.#setConection()
        try {
            return await this.model.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    }


}