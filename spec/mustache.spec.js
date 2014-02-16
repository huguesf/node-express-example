var mu = require('mustache');

describe('test mustache:', function() {
    it('do test', function(done) {
        var result= mu.render('Hello {{name}}', {'name':'Hugues'}, '');
        expect(result).toEqual('Hello Hugues');
        done();
    });
    it('do iteration', function(done) {
        var result= mu.render('Hello {{#names}}{{.}} {{/names}}', {'names': ['Hugues','Julie']});
        expect(result).toEqual('Hello Hugues Julie ');
        done();
    });
});
