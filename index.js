const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: "Olá Mundo!"
    })
});

app.get('/pessoas/eu', (req, res) => {
    return res.json({
        Nome: 'Brenda',
        Idade: 21,
        EstadoCivil: 'União Estável',
    });
});


app.listen(8000, () => {
    console.log('servidor iniciado')
})
