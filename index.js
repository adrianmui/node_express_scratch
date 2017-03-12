const express = require('express');

let app = express();

app.use((request, response, next) => {
    request.user = { name: 'Adrian' };
    next();
});

app.get('/hello', (request, response) => {
    response.send(`<h1> Hello ${request.user.name} </h1>`)
})

app.listen('3000');