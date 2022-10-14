const express = require('express')
const app = express()
app.listen('3000')


let livros = [
    {
        nome:"livro1",
        descricao:"descricao1"
    },
    {
        nome:"livro2",
        descricao:"descricao02"
    }
]

//midleware
app.use(express.json())


app.route('/').get((req,res) => {
    res.send(livros)
})

app.route('/').post((req,res) => {
    livros.push(req.body)
    res.send(livros)
})