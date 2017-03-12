const express = require('express');
const create = require('./middleware');
const anon = require('./middleware_anon');
const morgan = require('morgan');

let app = express();

/* middleware stacks */
app.use(create('Adrian Mui middleware'));
// masking request headers to prevent security attacks
app.use(anon());
// request .bash loggers
app.use(morgan('combined'));

app.get('/hello', (request, response) => {
    response.send(`<h1> Hello ${request.user.name} </h1>`)
});

app.listen('3000');