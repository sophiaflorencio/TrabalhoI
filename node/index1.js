const express = require('express')
const banco = require("./banco")
const professor = require("./professor")
const aluno = require("./aluno")

const al = [
        {id: 1, nome: "Alessandra", idade: 17,  serie: "info22"}
]

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

app.get("/professor/",async function(req, res) {
    const resultado = await professor.professor.findAll()
    res.send(resultado);
})

app.get("/aluno/",async function(req, res) {
    const resultado = await aluno.aluno.findAll()
    res.send(resultado);
})

app.get("/professor/:id",async function(req, res) {
    const professorSelecionado = await professor.professor.findByPk(req.params.id, 
        { include: { model: aluno.aluno } } 
    )
    if( professorSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(professorSelecionado);
    } 
})

app.get("/aluno/:id",async function(req, res) {
    const alunoSelecionado = await alunos.alunos.findByPk(req.params.id,
        { include: {model: professores.professores } }
    )
    if( alunoSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(aluno);
    } 
})

app.post("/professor/",async function(req,res){
    const resultado = await professor.professor.create({
        nome:req.body.nome
    })
    res.send(resultado)
})

app.post("/aluno/",async function(req,res){
    const resultado = await aluno.aluno.create({
        nome:req.body.nome,
        idade:req.body.idade,
        serie:req.body.serie,
        professorId:req.body.professorId
    })
    res.send(resultado)
})

app.put("/professor/:id",async function(req,res){
    const resultado = await professor.professor.update({
        nome:req.body.nome
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await professor.professor.findByPk(req.params.id))
    }
})

app.put("/aluno/",async function(req,res){
    const resultado = await aluno.aluno.update({
        nome:req.body.nome,
        professorId:req.body.professorId
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await aluno.aluno.findByPk(req.params.id))
    }
})

app.delete("/professor/:id",async function(req,res){
    const resultado = await professor.professor.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.delete("/aluno/:id",async function(req,res){
    const resultado = await aluno.aluno.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})
