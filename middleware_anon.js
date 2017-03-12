function anon(username) {
    return (request, response, callback) => {
        response._headers['x-powered-by'] = "ADRIAN CENSORED";
        response.set('X-Shenanigans', 'none');
        callback();
    }
}

module.exports = anon;