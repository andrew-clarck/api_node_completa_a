import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    isbn: {type: String, require:true},
    titulo_livro: {type: String, require:true},
    editora: {type: String, require:true},
    ano_publicacao: {type: String, require:true}
}, {versionKey: false})

const livro = mongoose.model("livros", livroSchema)

export default livro