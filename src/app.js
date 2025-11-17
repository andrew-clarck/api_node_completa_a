import express from "express"
import conectaDB from "./config/dbConnect.js"
import livro from "./model/livro.js"

const conexao = await conectaDB()

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão Realizada!")
})

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Livraria Saber e Cia")
})

app.get("/livros", async (req, res) => {
    const listarLivros = await livro.find({})
    res.status(200).json(listarLivros)
})

app.get("/livros/:id", async (req, res) => {
    const id = req.params.id
    const livroSelecionado = await livro.findByIId(id)
    res.status(200).json(livroSelecionado)
})

app.post("/livros", async (req, res) => {
    const novoLivro = await livro.create(req.body)
    res.status(201).json({message:"Livro cadastrado", livro:novoLivro})
})

app.put("/livros/:isbn", (req, res) => {
    const index = buscarLivros(req.params.isbn)
    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete("/livros/:isbn", (req, res) => {
    const index = buscarLivros(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})

export default app