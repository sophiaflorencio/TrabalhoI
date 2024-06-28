const sequelize = require("sequelize");
const banco = require("./banco")
const professor = require("./professor")

const alunos = [
    {id: 1, nome: "Alessandra", idade: 17,  serie: "info22"}
]

var aluno = banco.conexao.define(
    "aluno",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        idade:{
            type:sequelize.INTEGER.UNSIGNED,
            allowNull:false
        },
        serie:{
            type:sequelize.STRING,
            allowNull:false
        }
    },
    { timestamps: false }
)

module.exports = {aluno}