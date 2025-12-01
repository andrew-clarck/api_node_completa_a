import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome_autor: {type: String, require:true},
    nacionalidade: {type: String, require:true}
}, {versionKey: false})

const autor = mongoose.model("autores", autorSchema)

export default autor