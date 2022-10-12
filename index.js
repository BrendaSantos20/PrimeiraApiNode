
const express = require('express');
const app = express();
app.use(express.json())

const pessoas = [
    {
        nome: 'Binho',
        idade: 24,
        elo: 'Imortal'
    }
];
app.get('/pessoas', (request, response) => {
    return response.json(pessoas)
});

app.post('/pessoas', (req, res) => {
    const novaPessoa = {
        nome: req.body.nome,
        idade: req.body.idade,
        elo: req.body.elo
    }
    pessoas.push(novaPessoa)
    return res.json(novaPessoa)

})

app.get('/pessoas/:nome', (req, res) => {
    const nome = req.params.nome;
    const pessoa = pessoas.find((p) => {
        return p.nome === nome
    });
    return res.json(pessoa)
})

// Criar uma API de soma. Vai receber dois parametros de rota, vai retornar a soma dos numeros.


app.get('/soma/:numeroUm/:numeroDois', (req, res) => {
    const numeroUm = req.params.numeroUm
    const numeroDois = req.params.numeroDois
    const result = Number(numeroUm) + Number(numeroDois)

    return res.json({
        result
    })
})



// app.get('/pessoas/eu', (req, res) => {
//     return res.json({
//         Nome: 'Brenda',
//         Idade: 21,
//         EstadoCivil: 'União Estável',
//     });
// });


app.listen(8000, () => {
    console.log('servidor iniciado')
})

