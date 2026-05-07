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

app.get('/api/dados/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const dado = historico_sensores.find(s => s.id === id);
    if (!dado){
        return res.status(400).json({mensagem:"ID não encontrado, verifique e tente novamente!"});
    }
    res.json(dado);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`)
});

app.post("/api/dados", (req,res) => {
    const{temperatura, umidade, hora} = req.body;

    if(!temperatura||!umidade||!hora){
        res.status(400).json({mensagem:"Dados incompletos"})
    }

    let novos_dados = {
        id: historico_sensores.length + 1,
        temperatura,
        umidade,
        hora
    }

    historico_sensores.push(novos_dados);

    res.status(201).json({dados:novos_dados, mensagem:"Dados enviados com sucesso!" });
})

app.delete('/api/dados/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const index = historico_sensores.findIndex (s => s.id === id);

    if (index === -1){
        return res.status(400).json({mensagem:"Dado não encontrado! Verifique e tente novamente"});
    };

    historico_sensores.splice(index,1);

    res.json({mensagem:"Dados removidos com sucesso!"});
})

app.put ('api/dados/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const index = historico_sensores.findIndex(s => s.id === id);

    if (index === -1){
        return res.status(404).json({mensagem:"Não é possível atualizar um dado inexistente!"});
    };

    const{temperatura,umidade,hora} = req.body;
    historico_sensores[index] = {id,temperatura,umidade,hora};
    res.json({mensagem:"Dados atualizados com sucesso!"});
});