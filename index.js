//carregar o modulo express
const express = require('express')

//executar o modulo express
const app = express()

//definir o local padrão para os arquivos ejs
app.set('views','./')

//renderizar o arquivo index.ejs na requisição / (root)
app.get('/',(req,res)=>{
    res.render('index.ejs',{nome:"Alunos Feiosos",turma:"2EMIB",disciplina:"INW"})
})

//ligar o servidor na porta 3050
app.listen(3050)