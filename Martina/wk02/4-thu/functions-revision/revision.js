console.log('revision');

// for numbers 0 to 50, print out numbers that are multiples of 3.

for (var i = 0; i < 50; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

// // print out numbers that are multiples of 5.
for (var i = 0; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i)
    }
}


//print out multiples of 3 and 5.
for (var i = 0; i < 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    } 
}


// RESULT
for (var i = 0; i < 50; i++) {
    if (i % 3 === 0) {
        console.log(i)
    } if (i % 5 === 0) {
        console.log(i)
    } if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    } 
}

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.


var transmogrifier = function(num1, num2, num3) {
    return (num1 * num2) * num3;
    var trasmogrified = (2 * 3) * 4;
    };
    
    transmogrifier(2, 3, 4);






