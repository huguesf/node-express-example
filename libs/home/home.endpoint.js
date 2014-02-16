var home = function( request, response) {
    response.send('Hello Yose!<br/>'+
'<a id="repository-link" href="https://github.com/huguesf/node-express-example">repository</a><br/>'+
'<a id="contact-me-link" href="https://github.com/huguesf">contact me</a><br/>'+
'<a id="ping-challenge-link" href="/ping">ping</a>');
};

module.exports = home;