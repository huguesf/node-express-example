var home = function( request, response) {
    response.send('Hello Yose! <a id="repository-link" href="https://github.com/huguesf/node-express-example">repository</a>');
};

module.exports = home;