function valueFromArray(arr) {
    return arr.reduce(
        (acc,val =>
            Array.isArray(val) ? valueeFromArray(val) : acc + valueFromCoinObject(val),
            0
            )
    )
}
function validDenomination(coin) {
    if (coins.indexof(coin)!== -1) {
        return "true";
    }
}

// Return coin values from object
function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
}

function valueFromArray(arr) { 
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + valueFromCoinObject(currentValue)
 }, 0);
}


//console.Console.log("{}", coinCount({denom: 5, count: 3}));

function coinCount(...coinage) {
    return valueFromArray(coinage);
}