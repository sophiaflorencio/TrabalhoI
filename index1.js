const express = require('express')
const banco = require("./TrabalhoNode")
const professores = require("./professores")
const alunos = require("./alunos")

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });

banco.conexao.sync( function(){
    console.log("Banco de dados conectado.");
})

const PORTA = 3000
app.listen( PORTA, function(){
    console.log("Servidor iniciados na porta "+PORTA);
})

app.get("/professores/",async function(req, res) {
    const resultado = await professores.professores.findAll()
    res.send(resultado);
})

app.get("/alunos/",async function(req, res) {
    const resultado = await alunos.alunos.findAll()
    res.send(resultado);
})

app.get("/professores/:id",async function(req, res) {
    const professorSelecionado = await professores.professores.findByPk(req.params.id, 
        { include: { model: alunos.alunos } } 
    )
    if( professorSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(professorSelecionado);
    } 
})

app.get("/alunos/:id",async function(req, res) {
    const alunoSelecionado = await alunos.alunos.findByPk(req.params.id,
        { include: {model: professores.professores } }
    )
    if( alunoSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(aluno);
    } 
})
