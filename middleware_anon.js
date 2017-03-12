function anon(username) {
    return (request, response, callback) => {
        response._headers['x-powered-by'] = "ADRIAN CENSORED";
        callback();
    }
}

module.exports = anon;