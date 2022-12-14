//carregar o modulo express
const { urlencoded } = require('express')
const express = require('express')

//carregar o modulo mongoose
const mongoose = require('mongoose')

//conectar com o banco de dados revisao
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:LUCCA0108052015@fiaptecnico.nw8ac.mongodb.net/revisao')
}
//conectar com a collection infos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
const infos = mongoose.model('infos',modelo)

//executar o modulo expresse
const app = express()

//definir o local padrão para os arquivos ejs
app.set('views','./')

//renderizar o arquivo index.ejs na requisição / (root)
app.get('/',async(req,res)=>{
    conexao()
    //buscar todos os dados de infos
    const resultado= await infos.find()
    res.render('index.ejs',{resultado})
})

//gravar as informações do formulario no banco de dados
app.use(urlencoded({extended:false}))
app.post('/',async(req,res)=>{
    const dados = req.body
    res.send(dados)
})

//ligar o servidor na porta 3050
app.listen(3050,()=>{
    console.log('servidor local em http://localhost:3050')
})