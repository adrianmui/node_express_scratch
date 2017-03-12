const express = require('express');
const create = require('./middleware');
const anon = require('./middleware_anon');

let app = express();

//middleware stackcs
app.use(create('Adrian Mui middleware'));
app.use(anon());

app.get('/hello', (request, response) => {
    response.send(`<h1> Hello ${request.user.name} </h1>`)
});

app.listen('3000');