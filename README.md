# API JavaScript
## 💻 Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

JavaScript
Node.js
Express.js
CORS
Git/GitHub

## Projeto

Desenvolver uma API REST utilizando JavaScript e Express para realizar operações de comunicação entre cliente e servidor através de requisições HTTP.

## Funcionalidades
### Requisito 1
Inicializar um servidor utilizando Express.
Configurar a porta de execução.
Exibir mensagem de confirmação ao iniciar o servidor.

Implementação:

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

### Requisito 2
Permitir requisições de diferentes origens.
Configurar CORS para comunicação com aplicações externas.

Implementação:

app.use(cors());

### Requisito 3
Criar endpoints para recebimento e envio de dados.
Retornar respostas em formato JSON.

Exemplo:

app.get("/", (req, res) => {
    res.json({
        mensagem: "API funcionando!"
    });
});
