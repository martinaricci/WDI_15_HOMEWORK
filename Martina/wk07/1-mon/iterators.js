console.log('hello');

var countInteger = function(array) {
    var listOfIntegers = [];
    array.forEach(function(element) {
        if (Number.isInteger(element)) {
            listOfIntegers.push(element);
        }
    });
    return listOfIntegers;
}

countInteger([4, 2.2, 5, 6, 4.2, 8.2, 4]);

var getSquares = function(array) {
    return array.map(function(number) {
        return number**2;
    });
}

getSquares([1, 2, 3, 4, 5]);