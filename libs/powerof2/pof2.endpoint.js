var pof2 = require('./pof2.js')();

var primeFactor = function(request, response) {
    var numbers;
    if ( typeof request.query.number === 'string')
    {
        numbers= [request.query.number];
    }
    else
    {
        numbers= request.query.number;
    }
    
    var responseToSend= new Array();
    for(var i= 0; i < numbers.length; i++) {
        var number= numbers[i];
        responseToSend.push(function () {
            try {
                var value = pof2.calc(number);
                return { "number": number, "decomposition" : value };
            }
            catch(e) {
                return { "number": number, "error" : e.message};
            }
        }());
    }
    response.setHeader('Content-Type', 'application/json');
    if ( responseToSend.length===1)
    {
        response.send(responseToSend[0]);
    }
    else
    {
        response.send(responseToSend);
    }
};

module.exports = primeFactor;
