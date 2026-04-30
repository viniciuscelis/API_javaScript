const express = require("express");
const cors = require("cors");
const { request } = require("http");
const app = express(); //essa linha é similar ao app =Flask

app.use(cors());
app.use(express.json());

let historico_sensores = [
    {id:1, temperatura:20, umidade:60, hora:"10:00"},
    {id:2, temperatura:18, umidade:65, hora:"11:00"},
    {id:3, temperatura:15, umidade:75, hora:"12:00"},
];

app.get('/api/dados', (req,res) => {
    res.json(historico_sensores);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`)
});

app.post("/api/dados", (req,res) => {
    const{temperatura, umidade, hora} = req.body;

    let novos_dados = {
        id: historico_sensores.length + 1,
        temperatura,
        umidade,
        hora
    }

    historico_sensores.push(novos_dados);

    res.status(201).json({dados:novos_dados, mensagem:"Dados enviados com sucesso!" });
})