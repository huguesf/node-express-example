var pof2 = function() {
    var initialNumber;
    var maxDivisor;
    
    var verify = function(number) {
        var value = parseInt(number, 10);
        if (number != value)
        {
            throw new Error('not a number');
        }
        if (value > 100000)
        {
            throw new Error('too big number (>1e6)');
        }
        return value;
    };
    
    var initialize = function(number) {
        initialNumber= number;
        maxDivisor= Math.sqrt(number);
    };

    var firstDivisor = function() {
        return 2;
    };
    
    var moveToNextDivisor = function(currentDivisor, number) {
        var maxDivisor = Math.sqrt(number);
        var numberToTest= currentDivisor + 1;
        while( numberToTest <= maxDivisor && !isPrime(numberToTest)) {
            numberToTest++;
        }
        if (numberToTest > number) return numberToTest;
        return numberToTest<=maxDivisor?numberToTest:number;
    };
    
    var isPrime = function(number) {
        var divisor= 2;
        var maxValue = Math.sqrt(number);
        while(divisor < maxValue)
        {
            if ( number % divisor === 0) return false;
            divisor++;
        }
        return true;
    };
    
    var factorize = function(number) {
        var result = new Array();
        var currentDivisor= firstDivisor();
        do
        {
            while (number >= currentDivisor && number % currentDivisor === 0)
            {
                result.push(currentDivisor);
                number = number / currentDivisor;
            }
            currentDivisor= moveToNextDivisor(currentDivisor, number);
        } while(currentDivisor <= initialNumber);
        return result;
    };
    
    var calc = function(number) {
        number= verify(number);
        initialize(number);
        return factorize(number);
    };

    return {
        calc: calc
    };
};

module.exports = pof2;