const express = require('express');


const app = express();
app.get('/', (request, response) => {
    return response.json({
        message: "Olá Mundo!"
    })
});

app.listen(8000, () => {
    console.log('servidor começou')
})