function create(username) {
    return (request, response, callback) => {
        request.user = { name: username };
        callback();
    }
}

module.exports = create;