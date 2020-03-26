const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (request, response) => {

    return response.json({
        nome: 'Allan',
        sobrenome: 'Mainardes'
    });
});

app.listen(3333);
