
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

// Criar uma API de soma. Vai receber dois parametros de rota, vai retornar a soma dos numeros, ou a subtracao ou retornar o maior.

// app.get('/mostrarMaior/:numeroUm/:numeroDois', (req, res) => {
//     const numeroUm = Number(req.params.numeroUm)
//     const numeroDois = Number(req.params.numeroDois)

//     return res.json(Math.max(numeroUm,numeroDois))

// })


/** criar uma api post que vai receber um objeto como parametro, nesse objeto vai ter nome e sobrenome. Retornar nome completo.  */
// app.post('/nome-completo', (req, res) => {

//     const nome = req.body.nome
//     const sobrenome = req.body.sobrenome
//     return res.json(nome + ' ' + sobrenome)
// })

/**criar um api GET que vai ter um parametro numerico na rota que significa a idade, retornar a idade depois do proximo aniversario. */

// app.get('/aniversario/:idade', (req, res) => {
//     const idade = Number(req.params.idade);
//     return res.json(idade + 1)
// })

/**  */








/**app.get('/pessoas/eu', (req, res) => {
   return res.json({
       Nome: 'Brenda',
       Idade: 21,
       EstadoCivil: 'União Estável',
   });
}); */


app.listen(8000, () => {
    console.log('servidor iniciado')
})

