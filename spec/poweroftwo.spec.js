var pof2= require('../libs/powerof2/pof2.js')();

describe('power of 2', function() {
    it('returns an empty list for 0', function(done) {
        var result= pof2.calc(0);
        expect(result).toBeDefined();
        done();
    });
    
    it('returns a list of one 2 for power of two 2', function(done) {
        var result= pof2.calc(2);
        expect(result).toEqual([2]);
        done();
    });
    
    it('returns 2 twos when given 4', function(done) {
        var result= pof2.calc(4);
        expect(result).toEqual([2,2]);
        done();
    });

    it('returns 3 twos when given 8', function(done) {
        var result= pof2.calc('8');
        expect(result).toEqual([2,2,2]);
        done();
    });
    
    it('not a number', function(done) {
        expect(function() {
            pof2.calc('test');
        }).toThrow('not a number');
        done();
    });
    
    it('too big number (>1e6)', function(done) {
        expect(function() {
            pof2.calc('100001');
        }).toThrow('too big number (>1e6)');
        done();
    });
    
    it('returns 3 when given 3', function(done) {
        expect(pof2.calc('3')).toEqual([3]);
        done();
    });
    
    it('returns two 3 when given 9', function(done) {
        expect(pof2.calc('9')).toEqual([3,3]);
        done();
    });
    
    it('returns 3 and 5 when given 15', function(done) {
        expect(pof2.calc('15')).toEqual([3,5]);
        done();
    });
    
    it('returns two 5 when given 25', function(done) {
        expect(pof2.calc('25')).toEqual([5,5]);
        done();
    });
    
    it('returns two 7 when given 49', function(done) {
        expect(pof2.calc('49')).toEqual([7,7]);
        done();
    });
    
    it('returns 2 3 11 when given 66', function(done) {
        expect(pof2.calc('66')).toEqual([2,3,11]);
        done();
    });
    
    it('returns 2 3 5 7 7 when given 1470', function(done) {
        expect(pof2.calc('1470')).toEqual([2,3,5,7,7]);
        done();
    });
    
    it('returns two 11 when given 121', function(done) {
        expect(pof2.calc('121')).toEqual([11,11]);
        done();
    });
    
    it('returns 2 3 1231 when given 7386', function(done) {
        expect(pof2.calc('7386')).toEqual([2,3,1231]);
        done();
    });
    
    it('returns ? when given 99999', function(done) {
        expect(pof2.calc('99999')).toEqual([3, 3, 41, 271]);
        done();
    });
});

function dumpObject(obj) {
    for(var t in obj) {
        console.log('> '+t+' : '+obj[t]);
    }
    return obj;
}