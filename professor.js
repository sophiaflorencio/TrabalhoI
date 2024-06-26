const sequelize = require("sequelize");
const banco = require("./banco")
const aluno = require("./aluno")

var professor = banco.conexao.define(
    "professor",
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
        formacao:{
            type:sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
)

professor.hasMany( aluno.aluno )
aluno.aluno.belongsTo( professor )

module.exports = {professor}